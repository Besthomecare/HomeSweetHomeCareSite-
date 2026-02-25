import OpenAI from "openai";
import type { ChatCompletionMessageParam, ChatCompletionTool } from "openai/resources/chat/completions";
import { storage } from "./storage";
import { getUncachableResendClient } from "./resend-client";
import { getAvailableSlots, createAppointment } from "./calendar";

function getOpenAIClient(): OpenAI {
  const apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY || process.env.OPENAI_API_KEY;
  const baseURL = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL;

  if (!apiKey) {
    throw new Error("OpenAI API key not configured. Chat is unavailable.");
  }

  return new OpenAI({
    apiKey,
    ...(baseURL ? { baseURL } : {}),
  });
}

const SYSTEM_PROMPT = `You are a friendly, helpful assistant for Home Sweet Home Care, a non-medical in-home care agency serving seniors in Florida. Your job is to answer questions about the company and its services clearly and warmly.

COMPANY INFORMATION:
- Name: Home Sweet Home Care
- Phone: (941) 200-0848
- Email: Info@besthomecare.net
- Address: 5265 University Pkwy, STE 101-177, Sarasota, FL 34201
- Office Hours: Monday–Friday, 9:00 AM – 5:00 PM (Closed Saturday & Sunday)
- Website: besthomecare.net

SERVICE AREAS:
Sarasota, Bradenton, Lakewood Ranch, Siesta Key, Longboat Key, Venice, North Port, and surrounding communities in Sarasota and Manatee County.

SERVICES WE PROVIDE (non-medical care only):
1. Companionship & Social Support — Friendly conversation, cognitive stimulation, emotional connection, and shared activities to combat loneliness.
2. Transportation & Errands — Safe transportation to medical appointments, shopping, errands, and social outings.
3. Medication Reminders — Gentle reminders to take medications on schedule, prescription pickup, and documentation for families.
4. Light Housekeeping — Dusting, vacuuming, laundry, kitchen cleaning, and general tidying.
5. Meal Preparation — Grocery shopping, meal planning with dietary considerations, and preparing fresh meals.
6. Observation & Reporting — Attentive monitoring of client wellbeing, regular updates to families, and coordination with healthcare professionals.

HOW TO GET STARTED:
1. Schedule a free in-home consultation — A coordinator visits to learn about needs, routines, and preferences.
2. Receive a customized care plan — Includes safety assessment, fall-risk review, and personalized schedule based on goals and budget.
3. Meet your caregiver — Matched with a professional W-2 caregiver who has passed Level-2 background screening.

CAREGIVER QUALIFICATIONS:
- All caregivers are W-2 employees (not independent contractors)
- Level-2 background screening (Florida requirement)
- Bonded and insured
- Ongoing training
- Carefully matched to client preferences

SCHEDULING:
- Minimum 4 hours per visit recommended
- Flexible scheduling from a few hours a week to 24/7 care
- Services can typically begin within 24-48 hours
- Same-day requests accommodated when possible

PRICING:
- Costs vary based on level of care and hours needed
- Competitive rates with flexible scheduling
- Long-term care insurance may be accepted
- Free care assessment and personalized quote available

SCHEDULING APPOINTMENTS:
You can help customers in two ways:
1. REQUEST A CALLBACK: Collect their full name, phone number, and home address. Then use the request_callback function. Tell them we'll give them a call as soon as we can.
2. BOOK AN APPOINTMENT: If the customer wants to pick a specific day and time for their free in-home consultation, first collect their full name, phone number, and home address. Then ask what date works for them. Use check_availability to find open time slots on that date. Present the available times and let them choose. Then use schedule_appointment to book it.

When collecting information for either path:
- Ask for their full name first
- Then ask for their phone number
- Then ask for their home address (this is where the in-home consultation would take place)
- Be conversational and warm — don't ask for everything at once like a form

GUIDELINES FOR YOUR RESPONSES:
- Keep answers concise (2-4 sentences when possible)
- Be warm, compassionate, and professional
- For specific pricing questions, explain that costs vary and encourage them to call (941) 200-0848 or request a free care assessment
- For medical questions, clarify that you provide non-medical care and suggest consulting a healthcare provider
- For urgent situations, always recommend calling (941) 200-0848 directly
- Do not make up information not listed above
- If asked something outside your knowledge, say you're not sure and suggest they call or visit the contact page`;

const tools: ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "request_callback",
      description:
        "Submit a callback request so the Home Sweet Home Care team can call the customer back as soon as possible. Use this when the customer wants to be contacted but doesn't need a specific appointment time.",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string", description: "Customer's full name" },
          phone: { type: "string", description: "Customer's phone number" },
          address: {
            type: "string",
            description: "Customer's home address where care would be provided",
          },
          notes: {
            type: "string",
            description: "Any additional notes from the conversation about the customer's needs",
          },
        },
        required: ["name", "phone", "address"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "check_availability",
      description:
        "Check available appointment slots on a specific date. Returns a list of available 1-hour time slots during business hours (Mon-Fri, 9AM-5PM). Slots must be at least 24 hours in the future.",
      parameters: {
        type: "object",
        properties: {
          date: {
            type: "string",
            description: "The date to check in YYYY-MM-DD format",
          },
        },
        required: ["date"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "schedule_appointment",
      description:
        "Book a free in-home consultation appointment on the company calendar. Use this after the customer has chosen a specific time slot from the available options.",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string", description: "Customer's full name" },
          phone: { type: "string", description: "Customer's phone number" },
          address: {
            type: "string",
            description: "Customer's home address where the consultation will take place",
          },
          date_time: {
            type: "string",
            description:
              "The ISO 8601 timestamp for the appointment. Use the exact 'iso' value returned by check_availability for the customer's chosen slot.",
          },
          notes: {
            type: "string",
            description: "Any additional notes from the conversation",
          },
        },
        required: ["name", "phone", "address", "date_time"],
      },
    },
  },
];

async function executeFunction(
  name: string,
  args: Record<string, any>
): Promise<string> {
  try {
    switch (name) {
      case "request_callback": {
        const consultation = await storage.createConsultation({
          name: args.name,
          phone: args.phone,
          address: args.address,
          notes: args.notes || null,
          calendarEventId: null,
          appointmentTime: null,
          status: "pending",
        });

        try {
          const { client, fromEmail } = await getUncachableResendClient();
          await client.emails.send({
            from: fromEmail,
            to: "info@besthomecare.net",
            subject: `New Callback Request — ${args.name}`,
            html: `
              <h2>New Callback Request (via Chatbot)</h2>
              <p><strong>Name:</strong> ${args.name}</p>
              <p><strong>Phone:</strong> ${args.phone}</p>
              <p><strong>Address:</strong> ${args.address}</p>
              ${args.notes ? `<p><strong>Notes:</strong> ${args.notes}</p>` : ""}
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              <p><em>This request was submitted through the website chatbot.</em></p>
            `,
          });
        } catch (emailError) {
          console.error("Failed to send callback notification email:", emailError);
        }

        return JSON.stringify({
          success: true,
          message: `Callback request saved for ${args.name}. Consultation ID: ${consultation.id}`,
        });
      }

      case "check_availability": {
        const slots = await getAvailableSlots(args.date);
        if (slots.length === 0) {
          return JSON.stringify({
            success: true,
            available_slots: [],
            message: `No available slots on ${args.date}. This may be a weekend or all slots are booked.`,
          });
        }
        return JSON.stringify({
          success: true,
          date: args.date,
          available_slots: slots.map((s) => ({
            display: s.display,
            iso: s.iso,
          })),
          instructions: "Present the 'display' times to the customer. When they choose one, use the corresponding 'iso' value for schedule_appointment's date_time parameter.",
        });
      }

      case "schedule_appointment": {
        const { eventId, startTime } = await createAppointment(
          args.name,
          args.phone,
          args.address,
          args.date_time,
          args.notes
        );

        const consultation = await storage.createConsultation({
          name: args.name,
          phone: args.phone,
          address: args.address,
          notes: args.notes || null,
          calendarEventId: eventId,
          appointmentTime: new Date(startTime),
          status: "scheduled",
        });

        try {
          const { client, fromEmail } = await getUncachableResendClient();
          const appointmentDate = new Date(startTime).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          const appointmentTime = new Date(startTime).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          });

          await client.emails.send({
            from: fromEmail,
            to: "info@besthomecare.net",
            subject: `New Appointment Booked — ${args.name} on ${appointmentDate}`,
            html: `
              <h2>New Consultation Appointment (via Chatbot)</h2>
              <p><strong>Name:</strong> ${args.name}</p>
              <p><strong>Phone:</strong> ${args.phone}</p>
              <p><strong>Address:</strong> ${args.address}</p>
              <p><strong>Appointment:</strong> ${appointmentDate} at ${appointmentTime}</p>
              ${args.notes ? `<p><strong>Notes:</strong> ${args.notes}</p>` : ""}
              <p><strong>Calendar Event ID:</strong> ${eventId}</p>
              <p><em>This appointment was booked through the website chatbot and added to Google Calendar.</em></p>
            `,
          });
        } catch (emailError) {
          console.error("Failed to send appointment notification email:", emailError);
        }

        return JSON.stringify({
          success: true,
          message: `Appointment scheduled for ${args.name} on ${args.date_time}. Event ID: ${eventId}, Consultation ID: ${consultation.id}`,
        });
      }

      default:
        return JSON.stringify({ success: false, message: `Unknown function: ${name}` });
    }
  } catch (error) {
    console.error(`Error executing function ${name}:`, error);
    return JSON.stringify({
      success: false,
      message: `Failed to execute ${name}. Please try again or call (941) 200-0848.`,
    });
  }
}

export async function getChatResponse(
  messages: Array<{ role: "user" | "assistant"; content: string }>
): Promise<string> {
  const chatMessages: ChatCompletionMessageParam[] = [
    { role: "system", content: SYSTEM_PROMPT },
    ...messages,
  ];

  const openai = getOpenAIClient();

  let response = await openai.chat.completions.create({
    model: "gpt-5-mini",
    messages: chatMessages,
    tools,
    max_completion_tokens: 1024,
  });

  let choice = response.choices[0];
  let attempts = 0;
  const maxAttempts = 5;

  while (choice?.finish_reason === "tool_calls" && choice.message.tool_calls && attempts < maxAttempts) {
    attempts++;

    chatMessages.push(choice.message);

    for (const toolCall of choice.message.tool_calls) {
      const args = JSON.parse(toolCall.function.arguments);
      const result = await executeFunction(toolCall.function.name, args);

      chatMessages.push({
        role: "tool",
        tool_call_id: toolCall.id,
        content: result,
      });
    }

    response = await openai.chat.completions.create({
      model: "gpt-5-mini",
      messages: chatMessages,
      tools,
      max_completion_tokens: 1024,
    });

    choice = response.choices[0];
  }

  const content = choice?.message?.content;
  if (!content) {
    console.error("Empty chat response. Finish reason:", choice?.finish_reason);
  }

  return content || "I'm sorry, I wasn't able to generate a response. Please call us at (941) 200-0848 for assistance.";
}
