import React, { ComponentProps } from 'react'
import styles from './action-button.module.scss'
import classNames from 'classnames'

function ActionButton(props: ComponentProps<'button'>) {
  return (
    <button {...props} className={classNames(styles.button, props.className)} />
  )
}

export default ActionButton
