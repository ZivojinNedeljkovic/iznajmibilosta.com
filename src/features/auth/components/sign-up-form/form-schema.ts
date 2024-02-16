import EMPTY_FIELD_ERROR_MESSAGE from '@auth/constants/empty-field-error-message'
import { passwordSchema } from '@auth/schemas/password-schema'
import { z } from 'zod'

export const formSchema = z
  .object({
    email: z
      .string()
      .min(1, EMPTY_FIELD_ERROR_MESSAGE)
      .email('Nije valiadn e-mail adresa'),
    password: passwordSchema,
    confirmPassword: z.string().min(1, EMPTY_FIELD_ERROR_MESSAGE),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Uneta lozinka se ne poklapa',
    path: ['confirmPassword'],
  })
