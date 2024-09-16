import { z } from "zod"

export const CreateGroupSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Univas name must be atleast 3 characters" })
    .max(50, { message: "Univas name cannot be more than 50 characters" }),
  category: z.string().min(3, { message: "You must select a category" }),
})