'use client'
import React, { ComponentProps, useId, useRef, useState } from 'react'
import styles from './password-filed.module.scss'
import TogglePasswordButton from '../toggle-password-button'
import BaseFiled from '../base-field'

type Props = {
  label: string
  isError?: boolean
  inputProps?: Omit<ComponentProps<'input'>, 'type | id'>
  errorMessage?: string
}

function PasswordFiled({ label, isError, inputProps, errorMessage }: Props) {
  const [showPassword, setShowPassword] = useState(false)
  const inputType = showPassword === true ? 'text' : 'password'
  const inputRef = useRef<HTMLInputElement | null>(null)
  const id = useId()

  const handelPasswordToggle = () => {
    setShowPassword(prev => !prev)
    setTimeout(() => {
      if (!inputRef.current) return
      const length = inputRef.current.value.length
      inputRef.current.setSelectionRange(length, length)
    }, 0)
  }

  return (
    <BaseFiled isError={isError} errorMessage={errorMessage}>
      <label htmlFor={id}>{label}</label>
      <div className={styles['input-wrapper']}>
        <input {...inputProps} ref={inputRef} id={id} type={inputType} />
        <TogglePasswordButton
          isShowPassword={showPassword}
          onClick={handelPasswordToggle}
          className={styles['password-toggle']}
        />
      </div>
    </BaseFiled>
  )
}

export default PasswordFiled
