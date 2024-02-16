import { EmailProvider } from '@auth/context/email-context'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function layout({ children }: Props) {
  return <EmailProvider>{children}</EmailProvider>
}

export default layout
