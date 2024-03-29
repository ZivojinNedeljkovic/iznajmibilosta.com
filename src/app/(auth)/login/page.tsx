import Card from '@auth/components/card'
import OrDivide from '@auth/components/or-divide'
import Providers from '@auth/components/providers'
import SignInForm from '@auth/components/sign-in-form'
import AppLink from '@navigation/components/app-link'
import AppPage from '@navigation/config/app-pages'
import React from 'react'

function page() {
  return (
    <main>
      <Card>
        <Card.H1>Ulogujte se</Card.H1>
        <SignInForm />
        <OrDivide />
        <Providers />
        <Card.P>
          Nemate nalog?{' '}
          <AppLink href={AppPage.signUpPage}>Registrujte se</AppLink>
        </Card.P>
      </Card>
    </main>
  )
}

export default page
