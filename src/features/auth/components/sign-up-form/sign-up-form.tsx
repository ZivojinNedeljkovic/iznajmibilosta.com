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
import getPasswordConditions from './get-password-conditions'
import { useRouter } from 'next/navigation'
import AppPage from '@navigation/config/app-pages'
import Checkbox from '@ui/checkbox'

function SignUpForm() {
  const {
    register,
    control,
    watch,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      acceptsTermsAndConditions: false,
      isOlderThe16: false,
    },
    resolver: zodResolver(formSchema),
  })

  const router = useRouter()
  const password = watch('password')
  const passwordConditions = getPasswordConditions(password)
  const hasError = Object.entries(errors).length > 0

  const onSubmit = handleSubmit(async ({ email, password }) => {
    const signUp = (
      await import('@/lib/firebase/create-user-with-email-and-password')
    ).default

    try {
      await signUp(email, password)
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setError('email', { message: 'Nalog sa e-mail adresom već postoji' })
        return
      }
      alert(error.code)
      return
    }

    sessionStorage.setItem('email', email)
    router.push(AppPage.verificationEmailSendPage)
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
        <Checkbox
          inputProps={register('acceptsTermsAndConditions')}
          errorMessage={errors.acceptsTermsAndConditions?.message}
        >
          Prihvatam Pravila i uslove koriscenja
        </Checkbox>
        <Checkbox
          inputProps={register('isOlderThe16')}
          errorMessage={errors.isOlderThe16?.message}
        >
          Imam više od 16 godina
        </Checkbox>
      </FlexBox>
      <ActionButton type="submit">Nastavi</ActionButton>
    </form>
  )
}

export default SignUpForm
