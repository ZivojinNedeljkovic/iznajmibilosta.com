import React, { ComponentProps, ReactNode, forwardRef } from 'react'
import styles from './checkbox.module.scss'
import CheckedIcon from './checked-icon'
import UncheckedIcon from './unchecked-icon'
import classNames from 'classnames'

type Props = {
  children?: ReactNode
  className?: string
  isError?: boolean
  errorMessage?: string
  inputProps?: Omit<ComponentProps<'input'>, 'type | className | style'>
}

const Checkbox = forwardRef<HTMLInputElement, Props>(function Checkbox(
  { children, className, errorMessage, isError = !!errorMessage, inputProps },
  ref
) {
  return (
    <div>
      <label
        className={classNames(styles.container, className, {
          [styles.error]: isError,
        })}
      >
        <input
          ref={ref}
          type="checkbox"
          className={styles.input}
          {...inputProps}
        />
        <div>
          <CheckedIcon className={styles['checked-icon']} />
          <UncheckedIcon className={styles['unchecked-icon']} />
          <span className={styles.label}>{children}</span>
        </div>
      </label>
      {errorMessage && (
        <p className={styles['error-message']}>{errorMessage}</p>
      )}
    </div>
  )
})

export default Checkbox
