'use client'
import { auth } from '@firebase/firebase'
import type { UserRecord } from 'firebase-admin/auth'
import React, { ReactNode, createContext, useContext, useState } from 'react'

type Props = {
  children: ReactNode
  user: UserRecord | null
}

export const AuthContextProvider = ({ children, user: initUser }: Props) => {
  const [user, setUser] = useState<UserRecord | null>(initUser)

  async function signInWithEmailAndPassword(email: string, password: string) {
    const signIn = (await import('firebase/auth')).signInWithEmailAndPassword
    const auth = (await import('@lib/firebase/firebase')).auth

    
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

type AuthContextType = {
  user: UserRecord | null
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('AuthContext is not provided')
  return context
}
