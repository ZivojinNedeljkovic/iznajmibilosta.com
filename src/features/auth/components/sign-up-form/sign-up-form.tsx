'use client'
import FlexBox from '@ui/flex-box'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  containsASpecialCharSchema,
  containsANumberSchema,
  formSchema,
  passwordLengthSchema,
} from './form-schema'
import Conditions from '@ui/conditions'
import TextFiled from '@ui/field/text-filed'
import PasswordField from '@ui/field/password-field'

function SignUpForm() {
  const {
    register,
    control,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { email: '', password: '', confirmPassword: '' },
    resolver: zodResolver(formSchema),
  })

  const password = watch('password')

  const passwordConditions = [
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

  const hasError = Object.entries(errors).length > 0

  return (
    <form onSubmit={handleSubmit(() => {})} noValidate>
      <FlexBox direction="column" gap={16}>
        <TextFiled
          label="E-mail adresa"
          type="email"
          inputProps={register('email')}
          errorMessage={errors.email?.message}
        />
        <Controller
          name={'password'}
          render={({ field }) => (
            <PasswordField
              label="Lozinka"
              inputProps={field}
              isError={!!errors.password?.message}
            />
          )}
          control={control}
        />
        <Conditions conditions={passwordConditions} hasError={hasError} />
        <Controller
          name="confirmPassword"
          render={({ field }) => (
            <PasswordField
              label="Potvrdite Lozinku"
              inputProps={field}
              errorMessage={errors.confirmPassword?.message}
            />
          )}
          control={control}
        />
      </FlexBox>
      <button>submit</button>
    </form>
  )
}

export default SignUpForm
