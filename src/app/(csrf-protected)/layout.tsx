import CsrfTokenProvider from '@auth/components/CsrfTokenProvider'
import getCsrfTokenFromHeaders from '@features/security/helpers/get-csrf-token-from-headers'
import React, { ReactNode } from 'react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

type Props = {
  children: ReactNode
}

function Layout({ children }: Props) {
  const csrfToken = getCsrfTokenFromHeaders()
  console.log('----- csrfToken', csrfToken)
  return <CsrfTokenProvider csrfToken={csrfToken}>{children}</CsrfTokenProvider>
}

export default Layout
