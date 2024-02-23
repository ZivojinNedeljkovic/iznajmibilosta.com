'use client'
import { setUser } from '@auth/store/user-slice'
import UserData from '@auth/types/user'
import { setCsrfToken } from '@features/security/store/security-slice'
import { AppStore, makeStore } from '@lib/redux/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

type Props = {
  children: React.ReactNode
  user: UserData | null
  csrfToken?: string
}

export default function StoreProvider({ children, user, csrfToken }: Props) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    if (user) {
      storeRef.current.dispatch(setUser(user))
    }
    if (csrfToken) {
      storeRef.current.dispatch(setCsrfToken(csrfToken))
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
