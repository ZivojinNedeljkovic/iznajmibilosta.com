import EMPTY_FIELD_ERROR_MESSAGE from '@auth/constants/empty-field-error-message'
import { z } from 'zod'

const emailSchema = z
  .string()
  .min(1, EMPTY_FIELD_ERROR_MESSAGE)
  .email('Nije valiadn e-mail adresa')

export default emailSchema
