import { 
  Users, 
  HeartHandshake, 
  Pill, 
  Brush, 
  UtensilsCrossed, 
  Car 
} from "lucide-react";
import { ServiceType, TestimonialType, FaqType, CompanyInfoType } from "@/types";

export const COMPANY_INFO: CompanyInfoType = {
  name: "Home Sweet Home Care",
  phone: "(941) 200-0840",
  email: "Info@besthomecare.net",
  website: "https://besthomecare.net",
  address: {
    street: "5265 University Pkwy, STE 101-177",
    city: "Sarasota",
    state: "FL",
    zip: "34201"
  },
  hours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 3:00 PM",
    sunday: "Closed"
  },
  socialMedia: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/"
  }
};

export const SERVICE_AREAS = [
  "Sarasota",
  "Bradenton",
  "Lakewood Ranch",
  "Siesta Key",
  "Longboat Key",
  "Venice"
];

export const SERVICES: ServiceType[] = [
  {
    id: "ai-companionship",
    title: "AI Companionship",
    description: "24/7 engagement, conversation, memory support, and personalized interaction through voice or tablet-based AI technology. Technology with heart that sets us apart.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Provides memory support, reminders, and light entertainment",
      "Grows more personalized with every interaction",
      "Designed to reduce loneliness and promote cognitive activity",
      "Can be accessed via smart speaker or tablet"
    ]
  },
  {
    id: "companionship",
    title: "Companionship",
    description: "Our caregivers provide meaningful social interaction, conversation, and emotional support to combat loneliness and isolation.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Friendly conversation and social interaction",
      "Cognitive stimulation and mental engagement",
      "Companionship for activities and hobbies"
    ]
  },
  {
    id: "medication-reminders",
    title: "Medication Reminders",
    description: "Our caregivers provide medication reminders, helping clients stay on track with their health management.",
    icon: Pill,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Gentle reminders to take medications on schedule",
      "Prescription pickup assistance from pharmacy",
      "Observe and report medication adherence to family"
    ]
  },
  {
    id: "housekeeping",
    title: "Light Housekeeping",
    description: "Light housekeeping services to maintain a clean, safe, and comfortable living environment.",
    icon: Brush,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Dusting, vacuuming, and general tidying",
      "Laundry and linen changing",
      "Kitchen cleaning and dish washing"
    ]
  },
  {
    id: "meal-preparation",
    title: "Meal Preparation",
    description: "Nutritious meal planning and preparation to ensure proper nutrition and enjoyable dining.",
    icon: UtensilsCrossed,
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Grocery shopping assistance",
      "Meal planning with dietary considerations",
      "Cooking and meal preparation"
    ]
  },
  {
    id: "transportation",
    title: "Transportation & Errands",
    description: "Reliable transportation and assistance with errands to maintain independence and community connection.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1559723944-6913027cf19a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Transportation to doctors' appointments",
      "Shopping and errand assistance",
      "Social outings and community events"
    ]
  },
  {
    id: "monitoring",
    title: "Observation & Reporting",
    description: "Our caregivers attentively observe health changes and provide regular updates to family and healthcare professionals.",
    icon: HeartHandshake,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Observe and report changes in condition",
      "Regular updates to family members",
      "Coordination with healthcare professionals"
    ]
  }
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    quote: "The care and compassion shown by the caregivers at Home Sweet Home Care have been exceptional. My mother has regained her independence and joy, and I have peace of mind knowing she's in good hands.",
    name: "Sarah Johnson",
    relation: "Daughter of client"
  },
  {
    quote: "Finding Home Sweet Home Care was a blessing. Their staff is professional, reliable, and genuinely caring. They've gone above and beyond in caring for my father, treating him with dignity and respect.",
    name: "Michael Thompson",
    relation: "Son of client"
  },
  {
    quote: "As someone living far from my mother, I worried constantly about her wellbeing. The team at Home Sweet Home Care has been exceptional in keeping me updated and ensuring she receives the best care possible.",
    name: "Lisa Rodriguez",
    relation: "Daughter of client"
  },
  {
    quote: "The personalized care plan created for my parents has made all the difference. The caregivers are attentive to their unique needs and preferences, creating a comfortable and supportive environment.",
    name: "Robert Williams",
    relation: "Son of clients"
  }
];

export const FAQS: FaqType[] = [
  {
    question: "How do you select and screen your caregivers?",
    answer: "Our caregivers undergo a thorough screening process that includes background checks, reference verification, skills assessment, and in-person interviews. We only hire caregivers who demonstrate exceptional skills, compassion, and reliability. All our caregivers are bonded, insured, and receive ongoing training to ensure they provide the highest quality care."
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Sarasota, Manatee County, and Lakewood Ranch areas in Florida. Our service area includes but is not limited to Sarasota, Bradenton, Lakewood Ranch, Siesta Key, Longboat Key, Venice, North Port, and surrounding communities."
  },
  {
    question: "How much does in-home care cost?",
    answer: "Our care services are personalized to meet each client's unique needs, so costs vary based on the level of care required and the number of hours needed. We offer competitive rates and flexible scheduling options. Contact us for a free care assessment and personalized quote. We're happy to discuss payment options, including long-term care insurance coverage."
  },
  {
    question: "What are the minimum hours required for care services?",
    answer: "We typically recommend a minimum of 4 hours per visit to ensure quality care and consistency for our clients. However, we understand that each situation is unique, and we're flexible in accommodating different scheduling needs. We offer a range of care options, from a few hours a week to 24/7 care, all tailored to your loved one's specific requirements."
  },
  {
    question: "Can we change caregivers if needed?",
    answer: "Yes, absolutely. Our goal is to ensure a perfect match between caregivers and clients. If for any reason you feel the caregiver isn't the right fit, we'll work with you to find a more suitable match. We value your feedback and want both our clients and their families to be completely satisfied with our services."
  },
  {
    question: "How quickly can care services begin?",
    answer: "We understand that care needs can arise unexpectedly. In most cases, we can begin services within 24-48 hours of completing the initial assessment. For urgent situations, we do our best to accommodate same-day requests. Our team works efficiently to create a personalized care plan and match your loved one with the most suitable caregiver as quickly as possible."
  }
];