'use client'
import CsrfToken from '@auth/models/csrf-token'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  csrfToken: string
}

function CsrfTokenProvider({ children, csrfToken }: Props) {
  CsrfToken.value = csrfToken
  return <>{children}</>
}

export default CsrfTokenProvider
