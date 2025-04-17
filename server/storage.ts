import { 
  users, 
  contactForms, 
  type User, 
  type InsertUser, 
  type ContactForm, 
  type InsertContactForm 
} from "@shared/schema";

// Database storage interface
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactForm(form: InsertContactForm): Promise<ContactForm>;
  getContactForm(id: number): Promise<ContactForm | undefined>;
  getAllContactForms(): Promise<ContactForm[]>;
  markContactFormAsRead(id: number): Promise<boolean>;
}

// Memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactForms: Map<number, ContactForm>;
  private userId: number;
  private contactFormId: number;

  constructor() {
    this.users = new Map();
    this.contactForms = new Map();
    this.userId = 1;
    this.contactFormId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactForm(insertForm: InsertContactForm): Promise<ContactForm> {
    const id = this.contactFormId++;
    const now = new Date();
    
    const contactForm: ContactForm = {
      ...insertForm,
      id,
      createdAt: now,
      isRead: false
    };
    
    this.contactForms.set(id, contactForm);
    console.log(`Contact form submitted: ${contactForm.firstName} ${contactForm.lastName} (${contactForm.email})`);
    return contactForm;
  }

  async getContactForm(id: number): Promise<ContactForm | undefined> {
    return this.contactForms.get(id);
  }

  async getAllContactForms(): Promise<ContactForm[]> {
    return Array.from(this.contactForms.values()).sort((a, b) => {
      // Sort by most recent first
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }

  async markContactFormAsRead(id: number): Promise<boolean> {
    const form = this.contactForms.get(id);
    if (!form) return false;
    
    form.isRead = true;
    this.contactForms.set(id, form);
    return true;
  }
}

export const storage = new MemStorage();
