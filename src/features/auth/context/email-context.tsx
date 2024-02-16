'use client'
import { ReactNode, createContext, useContext, useState } from 'react'

type EmailContextType = {
  email: string
  setEmail: (email: string) => void
}

const EmailContext = createContext<EmailContextType | null>(null)

type Props = {
  children?: ReactNode
}

export function EmailProvider({ children }: Props) {
  const [email, setEmail] = useState('')

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  )
}

export function useEmailContext() {
  const context = useContext(EmailContext)

  if (!context) throw new Error('Email Context not provided')

  return context
}
