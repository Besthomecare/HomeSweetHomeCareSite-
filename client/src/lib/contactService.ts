import { apiRequest } from "./queryClient";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  const res = await apiRequest("POST", "/api/contact", data);
  return res.json();
};
