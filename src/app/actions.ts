'use server';

import { query } from "@/lib/db";
import { Message } from "@/lib/types";

export type FormState = 
  | { success: true; message: string }
  | { success: false; message: string }
  | null;

export async function addMessage(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const name    = formData.get("name")    as string | null;
    const email   = formData.get("email")   as string | null;
    const message = formData.get("message") as string | null;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return { success: false, message: "Please fill in all fields." };
    }

    await query(
      `
      INSERT INTO messages (name, email, message)
      VALUES ($1, $2, $3)
      `,
      [name, email, message]
    );

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("DB insert error:", error);
    return { success: false, message: "Something went wrong. Try again later." };
  }
}

export async function getMessages(): Promise<Message[]> {
    return query<Message>(`
        SELECT
            id,
            name,
            email,
            message,
            created_at::text
        FROM messages
        ORDER BY created_at ASC
    `);
}