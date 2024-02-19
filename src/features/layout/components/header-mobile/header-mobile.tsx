import React from 'react'
import styles from './header-mobile.module.scss'

function HeaderMobile() {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>IznajmiBiloŠta</p>
    </header>
  )
}

export default HeaderMobile
