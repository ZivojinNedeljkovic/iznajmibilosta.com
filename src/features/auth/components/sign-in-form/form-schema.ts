import emailSchema from '@auth/schemas/email-schema'
import { passwordSchema } from '@auth/schemas/password-schema'
import { z } from 'zod'

const formSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export default formSchema
