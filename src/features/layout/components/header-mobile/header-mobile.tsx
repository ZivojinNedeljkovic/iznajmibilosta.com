import React from 'react'
import styles from './header-mobile.module.scss'
import ThemeToggleButton from '../theme-toggle-button'

function HeaderMobile() {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>IznajmiBiloŠta</p>
      <ThemeToggleButton />
      {/* <p>{email}</p> */}
    </header>
  )
}

export default HeaderMobile
