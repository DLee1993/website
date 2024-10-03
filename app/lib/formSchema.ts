import { z } from "zod";

export const FormDataSchema = z.object({
    name: z.string().min(1, "Your name is required"),
    company: z.string().min(1, "Company name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
});
