import { getUncachableGoogleCalendarClient } from "./google-calendar-client";

const BUSINESS_HOURS_START = 9;
const BUSINESS_HOURS_END = 17;
const SLOT_DURATION_MINUTES = 60;
const TIMEZONE = "America/New_York";

function getETOffset(date: Date): string {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    timeZoneName: "shortOffset",
  });
  const parts = formatter.formatToParts(date);
  const offsetPart = parts.find((p) => p.type === "timeZoneName")?.value || "GMT-5";
  const match = offsetPart.match(/GMT([+-]\d+)/);
  if (!match) return "-05:00";
  const hours = parseInt(match[1]);
  const sign = hours >= 0 ? "+" : "-";
  return `${sign}${String(Math.abs(hours)).padStart(2, "0")}:00`;
}

export interface AvailableSlot {
  display: string;
  iso: string;
}

export async function getAvailableSlots(dateStr: string): Promise<AvailableSlot[]> {
  const calendar = await getUncachableGoogleCalendarClient();

  const refDate = new Date(dateStr + "T12:00:00Z");
  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    weekday: "short",
  }).format(refDate);

  if (dayOfWeek === "Sat" || dayOfWeek === "Sun") {
    return [];
  }

  const offset = getETOffset(refDate);
  const timeMinISO = `${dateStr}T${String(BUSINESS_HOURS_START).padStart(2, "0")}:00:00${offset}`;
  const timeMaxISO = `${dateStr}T${String(BUSINESS_HOURS_END).padStart(2, "0")}:00:00${offset}`;

  const now = new Date();
  const minTime = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  const freeBusyResponse = await calendar.freebusy.query({
    requestBody: {
      timeMin: new Date(timeMinISO).toISOString(),
      timeMax: new Date(timeMaxISO).toISOString(),
      timeZone: TIMEZONE,
      items: [{ id: "primary" }],
    },
  });

  const busySlots = freeBusyResponse.data.calendars?.primary?.busy || [];

  const slots: AvailableSlot[] = [];
  for (let hour = BUSINESS_HOURS_START; hour < BUSINESS_HOURS_END; hour++) {
    const slotISO = `${dateStr}T${String(hour).padStart(2, "0")}:00:00${offset}`;
    const slotStart = new Date(slotISO);
    const slotEnd = new Date(slotStart.getTime() + SLOT_DURATION_MINUTES * 60 * 1000);

    if (slotStart < minTime) continue;

    const isBusy = busySlots.some((busy) => {
      const busyStart = new Date(busy.start!);
      const busyEnd = new Date(busy.end!);
      return slotStart < busyEnd && slotEnd > busyStart;
    });

    if (!isBusy) {
      const hourFormatted = hour > 12 ? hour - 12 : hour;
      const ampm = hour >= 12 ? "PM" : "AM";
      slots.push({
        display: `${hourFormatted}:00 ${ampm}`,
        iso: slotStart.toISOString(),
      });
    }
  }

  return slots;
}

export async function createAppointment(
  name: string,
  phone: string,
  address: string,
  dateTimeISO: string,
  notes?: string
): Promise<{ eventId: string; startTime: string }> {
  const calendar = await getUncachableGoogleCalendarClient();

  const startTime = new Date(dateTimeISO);
  if (isNaN(startTime.getTime())) {
    throw new Error(`Invalid date_time format: ${dateTimeISO}`);
  }

  const endTime = new Date(startTime.getTime() + SLOT_DURATION_MINUTES * 60 * 1000);

  const description = [
    `In-Home Consultation`,
    ``,
    `Client: ${name}`,
    `Phone: ${phone}`,
    `Address: ${address}`,
    notes ? `Notes: ${notes}` : "",
    ``,
    `Booked via website chatbot`,
  ]
    .filter(Boolean)
    .join("\n");

  const event = await calendar.events.insert({
    calendarId: "primary",
    requestBody: {
      summary: `Home Sweet Home Care - Consultation with ${name}`,
      description,
      location: address,
      start: {
        dateTime: startTime.toISOString(),
        timeZone: TIMEZONE,
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: TIMEZONE,
      },
    },
  });

  return {
    eventId: event.data.id!,
    startTime: startTime.toISOString(),
  };
}
