import React, { ComponentProps } from 'react'
import RippleButton from '../ripple-button'
import classNames from 'classnames'
import styles from './text-button.module.scss'

function TextButton(props: ComponentProps<typeof RippleButton>) {
  return (
    <RippleButton
      {...props}
      className={classNames(styles['text-button'], props.className)}
      rippleClassName={classNames(styles.ripple, props.rippleClassName)}
    />
  )
}

export default TextButton
