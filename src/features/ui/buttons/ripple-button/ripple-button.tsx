import React, { ComponentProps } from 'react'
import styles from './ripple-button.module.scss'
import classNames from 'classnames'
import Ripple from '@ui/ripple'

type Props = ComponentProps<'button'> & {
  rippleClassName?: string
  rippleDuration?: number
}

function RippleButton(props: Props) {
  const {
    className,
    rippleClassName,
    rippleDuration,
    children,
    ...buttonProps
  } = props

  return (
    <button {...buttonProps} className={classNames(className, styles.button)}>
      {children}
      <Ripple
        className={classNames(styles.ripple, rippleClassName)}
        duration={rippleDuration}
      />
    </button>
  )
}

export default RippleButton
