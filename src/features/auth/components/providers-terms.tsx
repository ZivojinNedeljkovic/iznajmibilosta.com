import AppLink from '@navigation/components/app-link'
import AppPage from '@navigation/config/app-pages'
import P from '@ui/p'
import React from 'react'

function ProvidersTerms() {
  return (
    <P>
      Registracijom na ovaj način prihvatate{' '}
      <AppLink href={AppPage.termsAndConditionsPage}>Pravila i uslove</AppLink>{' '}
      i izjavljujete da imate preko 16 godina.
    </P>
  )
}

export default ProvidersTerms
