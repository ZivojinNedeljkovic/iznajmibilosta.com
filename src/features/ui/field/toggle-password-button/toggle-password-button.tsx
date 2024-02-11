import React from 'react'
import ShowPasswordIcon from './show-password-icon'
import styles from './toggle-password-button.module.scss'
import classNames from 'classnames'
import HidePasswordIcon from './hide-password-icon'

type Props = {
  className?: string
  isShowPassword: boolean
  onClick?: () => void
}

function TogglePasswordButton({ className, isShowPassword, onClick }: Props) {
  const title = `${isShowPassword ? 'Hide' : 'Show'} password`
  const Icon = isShowPassword ? HidePasswordIcon : ShowPasswordIcon

  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
      type="button"
      onMouseDown={e => e.preventDefault()}
      title={title}
    >
      <Icon />
    </button>
  )
}

export default TogglePasswordButton
