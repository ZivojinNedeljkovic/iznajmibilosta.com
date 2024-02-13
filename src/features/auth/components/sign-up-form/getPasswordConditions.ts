import {
  containsANumberSchema,
  containsASpecialCharSchema,
  passwordLengthSchema,
} from './form-schema'

function getPasswordConditions(password: string) {
  return [
    {
      description: 'Između 8 i 20 karaktera',
      isTrue: passwordLengthSchema.safeParse(password).success,
    },
    {
      description: 'Najmanje jedan broj',
      isTrue: containsANumberSchema.safeParse(password).success,
    },
    {
      description: 'Najmanje jedan simbol',
      isTrue: containsASpecialCharSchema.safeParse(password).success,
    },
  ]
}

export default getPasswordConditions
