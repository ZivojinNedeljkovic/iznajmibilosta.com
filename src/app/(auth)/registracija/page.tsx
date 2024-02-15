import React from 'react'
import styles from './page.module.scss'
import Card from '@auth/components/card'
import H1 from '@ui/h1'
import FlexBox from '@ui/flex-box'
import Providers from '@auth/components/providers'
import ProvidersTerms from '@auth/components/providers-terms'
import OrDivide from '@auth/components/or-divide'
import SignUpForm from '@auth/components/sign-up-form/sign-up-form'

function SignUpPage() {
  return (
    <main className={styles.wrapper}>
      <Card>
        <H1>Registrujte se</H1>
        <SignUpForm />
        <OrDivide />
        <FlexBox direction="column" gap={16}>
          <Providers isSignUp />
          <ProvidersTerms />
        </FlexBox>
      </Card>
    </main>
  )
}

export default SignUpPage
