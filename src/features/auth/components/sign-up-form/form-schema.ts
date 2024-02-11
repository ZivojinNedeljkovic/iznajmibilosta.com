import { z } from 'zod'

export const passwordLengthSchema = z.string().min(8).max(20)
export const containsANumberSchema = z.string().regex(/\d/)
export const containsASpecialCharSchema = z.string().regex(/[^\w\s]/)

const passwordSchema = z
  .string()
  .refine(
    val =>
      passwordLengthSchema.safeParse(val).success &&
      containsANumberSchema.safeParse(val).success &&
      containsASpecialCharSchema.safeParse(val).success
  )

export const formSchema = z
  .object({
    email: z
      .string()
      .min(1, 'Polje ne sme biti prazno')
      .email('Nije valiadn e-mail adresa'),
    password: passwordSchema,
    confirmPassword: z.string().min(1, 'Polje ne sme biti prazno'),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Uneta lozinka se ne poklapa',
    path: ['confirmPassword'],
  })
