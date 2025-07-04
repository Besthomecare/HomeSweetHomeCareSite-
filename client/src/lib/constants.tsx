import { 
  Users, 
  Heart, 
  Pill, 
  Home, 
  Utensils, 
  Car 
} from "lucide-react";
import { ServiceType, TestimonialType, FaqType, CompanyInfoType } from "@/types";
import React from "react";

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
    weekdays: "9:00 AM - 5:00 PM",
    saturday: "Closed",
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
    id: "companionship",
    title: "Companionship",
    description: "Our caregivers provide meaningful social interaction, conversation, and emotional support to combat loneliness and isolation.",
    icon: React.createElement(Users, { size: "24" }),
    image: "https://images.unsplash.com/photo-1516307343297-53e935860ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Friendly conversation and emotional support",
      "Assistance with hobbies and recreational activities",
      "Accompaniment to appointments and social events"
    ]
  },
  {
    id: "personal-care",
    title: "Personal Care",
    description: "Compassionate assistance with daily living activities to maintain hygiene, comfort, and dignity.",
    icon: React.createElement(Heart, { size: "24" }),
    image: "https://images.unsplash.com/photo-1576765608866-5b51046452be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Bathing, grooming, and dressing assistance",
      "Mobility assistance and fall prevention",
      "Toileting and incontinence care"
    ]
  },
  {
    id: "medication-reminders",
    title: "Medication Reminders",
    description: "Ensure medications are taken correctly and on schedule to maintain health and prevent complications.",
    icon: React.createElement(Pill, { size: "24" }),
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Timely medication reminders",
      "Prescription pickup assistance",
      "Medication organization assistance"
    ]
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    description: "Light housekeeping services to maintain a clean, safe, and comfortable living environment.",
    icon: React.createElement(Home, { size: "24" }),
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Dusting, vacuuming, and general tidying",
      "Laundry and linen changing",
      "Light bathroom cleaning"
    ]
  },
  {
    id: "meal-preparation",
    title: "Meal Preparation",
    description: "Nutritious meal planning and preparation to ensure proper nutrition and enjoyable dining.",
    icon: React.createElement(Utensils, { size: "24" }),
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Grocery shopping assistance",
      "Meal planning with dietary considerations",
      "Simple meal preparation"
    ]
  },
  {
    id: "transportation",
    title: "Transportation & Errands",
    description: "Reliable transportation and assistance with errands to maintain independence and community connection.",
    icon: React.createElement(Car, { size: "24" }),
    image: "https://images.unsplash.com/photo-1559723944-6913027cf19a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Medical appointment transportation",
      "Shopping and errand assistance",
      "Social outings and community events"
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