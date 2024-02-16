'use client'
import React from 'react'
import styles from './sign-up-form.module.scss'
import FlexBox from '@ui/flex-box'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from './form-schema'
import Conditions from '@ui/conditions'
import TextFiled from '@ui/field/text-filed'
import PasswordField from '@ui/field/password-field'
import ActionButton from '@ui/buttons/action-button'
import getPasswordConditions from './getPasswordConditions'
import { useEmailContext } from '@auth/context/email-context'
import { useRouter } from 'next/navigation'
import AppPage from '@navigation/config/app-pages'

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

  const router = useRouter()

  const { setEmail } = useEmailContext()

  const password = watch('password')

  const passwordConditions = getPasswordConditions(password)

  const hasError = Object.entries(errors).length > 0

  const onSubmit = handleSubmit(async ({ email, password }) => {
    const createUserWithEmailAndPassword = (
      await import('@/lib/firebase/createUserWithEmailAndPassword')
    ).default

    try {
      await createUserWithEmailAndPassword(email, password)
    } catch (error) {
      alert(error)
      return
    }

    setEmail(email)
    router.push(AppPage.verifyEmail)
  })

  return (
    <form onSubmit={onSubmit} noValidate className={styles.form}>
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
      <ActionButton type="submit">Nastavi</ActionButton>
    </form>
  )
}

export default SignUpForm
