export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  careFor?: string;
  services?: string[];
  message?: string;
  consent: boolean;
}

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  benefits: string[];
}

export interface TestimonialType {
  quote: string;
  name: string;
  relation: string;
}

export interface FaqType {
  question: string;
  answer: string;
}

export interface CompanyInfoType {
  name: string;
  phone: string;
  email: string;
  website: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}
