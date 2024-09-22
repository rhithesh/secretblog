import * as z from "zod"

export const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
})
