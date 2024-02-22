'use client'
import { setUser } from '@auth/store/user-slice'
import User from '@auth/types/user'
import { AppStore, makeStore } from '@lib/redux/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

type Props = {
  children: React.ReactNode
  user: User | null
}

export default function StoreProvider({ children, user }: Props) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    if (user) storeRef.current.dispatch(setUser(user))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
