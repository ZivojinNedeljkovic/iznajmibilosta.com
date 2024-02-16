import Card from '@auth/components/card'
import OrDivide from '@auth/components/or-divide'
import Providers from '@auth/components/providers'
import SignInForm from '@auth/components/sign-in-form'
import AppLink from '@navigation/components/app-link'
import AppPage from '@navigation/config/app-pages'
import H1 from '@ui/h1'
import P from '@ui/p'
import React from 'react'

function page() {
  return (
    <main>
      <Card>
        <H1>Registrujte se</H1>
        <SignInForm />
        <OrDivide />
        <Providers />
        <P>
          Nemate nalog?{' '}
          <AppLink href={AppPage.signUpPage}>Registrujte se</AppLink>
        </P>
      </Card>
    </main>
  )
}

export default page
