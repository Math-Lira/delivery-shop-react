import { z } from 'zod'

const envShema = z.object({
  VITE_API_URL: z.string().url(),
})

export const env = envShema.parse(import.meta.env)
