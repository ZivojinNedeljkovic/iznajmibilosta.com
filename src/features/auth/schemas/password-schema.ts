import EMPTY_FIELD_ERROR_MESSAGE from '@auth/constants/empty-field-error-message'
import { z } from 'zod'

export const passwordLengthSchema = z
  .string()
  .min(1, EMPTY_FIELD_ERROR_MESSAGE)
  .min(8, 'Mora imati najmanje 8 karaktera')
  .max(20, 'Ne sme imati vise od 20 karaktera')

export const containsANumberSchema = z
  .string()
  .regex(/\d/, 'Mora sadržati broj')

export const containsASpecialCharSchema = z
  .string()
  .regex(/[^\w\s]/, 'Mora sadržati simbol')

export const passwordSchema = z
  .string()
  .pipe(passwordLengthSchema)
  .pipe(containsANumberSchema)
  .pipe(containsASpecialCharSchema)
