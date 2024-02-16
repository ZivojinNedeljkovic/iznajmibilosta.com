import React, { ReactNode } from 'react'
import styles from './layout.module.scss'

type Props = { children: ReactNode }

function layout({ children }: Props) {
  return <div className={styles.wrapper}>{children}</div>
}

export default layout
