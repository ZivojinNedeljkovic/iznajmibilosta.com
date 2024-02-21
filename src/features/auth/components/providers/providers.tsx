'use client'
import React, { useEffect } from 'react'
import styles from './providers.module.scss'
import GoogleIcon from './google-icon'
import FacebookIcon from './facebook-icon'
import AppleIcon from './apple-icon'
import googleSignInWithRedirect from '@firebase/google-sign-in-with-redirect'
import { getRedirectResult } from 'firebase/auth'
import { auth } from '@firebase/firebase'
import googleSignInWithPopup from '@firebase/google-sign-in-with-popup'

type Props = {
  isSignUp?: boolean
}

function Providers({ isSignUp = false }: Props) {
  return (
    <ul className={styles.wrapper}>
      {providers.map(({ Icon, name }) => (
        <li key={name}>
          <button onClick={googleSignInWithPopup}>
            <Icon />
            <span>
              {isSignUp ? 'Registrujte' : 'Ulogujte'} se preko {name}-a
            </span>
          </button>
        </li>
      ))}
    </ul>
  )
}

const providers = [
  {
    Icon: GoogleIcon,
    name: 'Google',
  },
  {
    Icon: FacebookIcon,
    name: 'Facebook',
  },
  {
    Icon: AppleIcon,
    name: 'Apple',
  },
]
export default Providers
