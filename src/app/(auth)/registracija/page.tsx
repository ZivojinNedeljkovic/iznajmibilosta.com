import React from 'react'
import Card from '@auth/components/card'
import H1 from '@ui/h1'
import FlexBox from '@ui/flex-box'
import Providers from '@auth/components/providers'
import ProvidersTerms from '@auth/components/providers-terms'
import OrDivide from '@auth/components/or-divide'
import SignUpForm from '@auth/components/sign-up-form/sign-up-form'
import P from '@ui/p'
import AppLink from '@navigation/components/app-link'
import AppPage from '@navigation/config/app-pages'

function SignUpPage() {
  return (
    <main>
      <Card>
        <H1>Registrujte se</H1>
        <SignUpForm />
        <OrDivide />
        <FlexBox direction="column" gap={16}>
          <Providers isSignUp />
          <ProvidersTerms />
        </FlexBox>
        <P>
          Već ste registrovani?{' '}
          <AppLink href={AppPage.signInPage}>Ulogujte se</AppLink>
        </P>
      </Card>
    </main>
  )
}

export default SignUpPage
