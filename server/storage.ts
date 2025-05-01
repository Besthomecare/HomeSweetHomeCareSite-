import { 
  users, 
  contactForms, 
  type User, 
  type InsertUser, 
  type ContactForm, 
  type InsertContactForm 
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

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

// Database storage implementation
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContactForm(insertForm: InsertContactForm): Promise<ContactForm> {
    const result = await db.insert(contactForms).values(insertForm).returning();
    console.log(`Contact form submitted: ${result[0].firstName} ${result[0].lastName} (${result[0].email})`);
    return result[0];
  }

  async getContactForm(id: number): Promise<ContactForm | undefined> {
    const result = await db.select().from(contactForms).where(eq(contactForms.id, id));
    return result[0];
  }

  async getAllContactForms(): Promise<ContactForm[]> {
    return await db.select().from(contactForms).orderBy(desc(contactForms.createdAt));
  }

  async markContactFormAsRead(id: number): Promise<boolean> {
    const result = await db
      .update(contactForms)
      .set({ isRead: true })
      .where(eq(contactForms.id, id))
      .returning({ id: contactForms.id });
    
    return result.length > 0;
  }
}

export const storage = new DatabaseStorage();
