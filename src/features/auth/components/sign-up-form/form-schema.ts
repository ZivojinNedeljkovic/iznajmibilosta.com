import EMPTY_FIELD_ERROR_MESSAGE from '@auth/constants/empty-field-error-message'
import emailSchema from '@auth/schemas/email-schema'
import { passwordSchema } from '@auth/schemas/password-schema'
import { z } from 'zod'

export const formSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, EMPTY_FIELD_ERROR_MESSAGE),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Uneta lozinka se ne poklapa',
    path: ['confirmPassword'],
  })
