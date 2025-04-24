import { 
  Users, 
  HeartHandshake, 
  Pill, 
  Brush, 
  UtensilsCrossed, 
  Car 
} from "lucide-react";
import { ServiceType, TestimonialType, FaqType, CompanyInfoType } from "@/types";

// Import service images
import aiCompanionship from "@assets/Screenshot 2025-04-17 130721.png";
import companionship from "@assets/Screenshot 2025-04-17 130739.png";
import medicationReminders from "@assets/Screenshot 2025-04-17 130755.png";
import lightHousekeeping from "@assets/Screenshot 2025-04-17 130846.png";
import mealPrep from "@assets/Screenshot 2025-04-17 131252.png";
import transportation from "@assets/Screenshot 2025-04-17 130625.png";
import logoImage from "@assets/home sweet home care logo.png";

export const COMPANY_INFO: CompanyInfoType = {
  name: "Home Sweet Home Care",
  phone: "(941) 200-0848",
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
    description: "Our innovative AI Companionship provides 24/7 engagement through voice or tablet-based technology. It offers conversation, memory support, and personalized interaction that grows more meaningful over time. This service provides peace of mind for families knowing their loved one has constant companionship.",
    icon: Users,
    image: aiCompanionship,
    benefits: [
      "Provides reliable and trustworthy support at any time of day",
      "Grows more personalized with every interaction",
      "Helps maintain dignity and independence in the home",
      "Offers peace of mind for families with 24/7 companionship"
    ]
  },
  {
    id: "companionship",
    title: "Companionship and Social Support",
    description: "Our caregivers provide meaningful social interaction and emotional connection that truly makes a difference. Through engaging conversations and shared activities, we help combat loneliness and isolation. Our personalized, compassionate care approach ensures each client receives the attention they deserve.",
    icon: Users,
    image: companionship,
    benefits: [
      "Friendly conversation and genuine social interaction",
      "Cognitive stimulation that maintains mental sharpness",
      "Reliable and trustworthy support for everyday activities",
      "Peace of mind for families knowing their loved one isn't alone"
    ]
  },
  {
    id: "medication-reminders",
    title: "Medication Reminders",
    description: "Staying on track with medications is crucial for health and wellbeing. Our caregivers provide gentle, timely medication reminders to ensure proper adherence to prescribed regimens. This service helps maintain dignity and independence while offering peace of mind for families.",
    icon: Pill,
    image: medicationReminders,
    benefits: [
      "Consistent reminders to take medications on schedule",
      "Prescription pickup assistance from local pharmacies",
      "Personalized, compassionate care during medication times",
      "Documentation and family updates on medication adherence"
    ]
  },
  {
    id: "housekeeping",
    title: "Light Housekeeping",
    description: "A clean home environment is essential for comfort and safety. Our light housekeeping services help maintain a tidy, organized living space without intruding on personal routines. We provide reliable and trustworthy support that preserves dignity while ensuring a well-maintained home.",
    icon: Brush,
    image: lightHousekeeping,
    benefits: [
      "Regular dusting, vacuuming, and general tidying",
      "Laundry assistance and linen changing",
      "Kitchen cleaning and dish washing",
      "Personalized, compassionate approach to home maintenance"
    ]
  },
  {
    id: "meal-preparation",
    title: "Meal Preparation",
    description: "Proper nutrition is fundamental to health and wellness. Our caregivers prepare nutritious, appealing meals that meet dietary needs and personal preferences. This service ensures clients maintain dignity and independence while enjoying wholesome, satisfying food in the comfort of their own home.",
    icon: UtensilsCrossed,
    image: mealPrep,
    benefits: [
      "Grocery shopping with attention to preferences and needs",
      "Meal planning with careful dietary considerations",
      "Preparation of fresh, appealing meals",
      "Peace of mind for families regarding nutrition and diet"
    ]
  },
  {
    id: "transportation",
    title: "Transportation & Errands",
    description: "Maintaining community connections is vital for wellbeing. Our transportation services provide reliable and trustworthy support for appointments, shopping, and social outings. We help clients maintain dignity and independence while offering peace of mind for families through safe, dependable transportation.",
    icon: Car,
    image: transportation,
    benefits: [
      "Safe, comfortable transportation to medical appointments",
      "Shopping and errand assistance with personal attention",
      "Support for social outings and community engagement",
      "Personalized, compassionate care during all transportation"
    ]
  },
  {
    id: "monitoring",
    title: "Observation & Reporting",
    description: "Our attentive caregivers provide careful observation of client wellbeing and subtle health changes. We deliver regular, thorough updates to family members and healthcare professionals when appropriate. This proactive approach ensures peace of mind for families through consistent monitoring.",
    icon: HeartHandshake,
    image: logoImage,
    benefits: [
      "Attentive observation of condition and subtle changes",
      "Regular, detailed updates to family members",
      "Coordination with healthcare professionals when needed",
      "Reliable and trustworthy documentation of observations"
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