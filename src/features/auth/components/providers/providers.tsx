import React from 'react'
import styles from './providers.module.scss'
import GoogleIcon from './google-icon'
import FacebookIcon from './facebook-icon'
import AppleIcon from './apple-icon'

type Props = {
  isSignUp?: boolean
}

function Providers({ isSignUp = false }: Props) {
  return (
    <ul className={styles.wrapper}>
      {providers.map(({ Icon, name }) => (
        <li key={name}>
          <button>
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
