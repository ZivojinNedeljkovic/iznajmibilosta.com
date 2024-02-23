'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import formSchema from './form-schema'
import FlexBox from '@ui/flex-box'
import TextFiled from '@ui/field/text-filed'
import PasswordField from '@ui/field/password-field'
import { Controller, useForm } from 'react-hook-form'
import ActionButton from '@ui/buttons/action-button'
import styles from './sign-in-form.module.scss'
import { useAppDispatch } from '@lib/redux/hooks'
import { setUser } from '@auth/store/user-slice'
import { useRouter } from 'next/navigation'
import AppPage from '@navigation/config/app-pages'
import { setCsrfToken } from '@features/security/store/security-slice'

function SignInForm() {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(formSchema),
  })

  const dispatch = useAppDispatch()
  const router = useRouter()

  const onSubmit = handleSubmit(async ({ email, password }) => {
    const signIn = (
      await import('@lib/firebase/sign-in-with-email-and-password')
    ).default

    try {
      const { user, csrfToken } = await signIn(email, password)
      dispatch(setUser(user))
      dispatch(setCsrfToken(csrfToken))
      router.replace(AppPage.homePage)
    } catch (error) {}
  })

  return (
    <form className={styles.form} onSubmit={onSubmit}>
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
              errorMessage={errors.password?.message}
            />
          )}
          control={control}
        />
      </FlexBox>
      <ActionButton type="submit">Nastavi</ActionButton>
    </form>
  )
}

export default SignInForm
