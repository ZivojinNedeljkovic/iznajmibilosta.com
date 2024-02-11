import React, { ReactNode } from 'react'
import styles from './base-field.module.scss'
import classNames from 'classnames'

type Props = {
  children: ReactNode
  errorMessage?: string
  isError?: boolean
}

function BaseFiled({
  children,
  errorMessage,
  isError = !!errorMessage,
}: Props) {
  return (
    <div className={classNames(styles.wrapper, { [styles.error]: isError })}>
      {children}
      {!!errorMessage && <p className={styles['error-message']}>{errorMessage}</p>}
    </div>
  )
}

export default BaseFiled
