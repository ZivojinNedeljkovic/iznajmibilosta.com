import React, { ComponentProps } from 'react'
import styles from './filed-error.module.scss'
import classNames from 'classnames'

function FiledError(props: ComponentProps<'p'>) {
  return (
    <p
      {...props}
      className={classNames(styles['error-message'], props.className)}
    />
  )
}

export default FiledError
