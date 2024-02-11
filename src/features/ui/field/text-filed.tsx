import React, { ComponentProps, useId, forwardRef } from 'react'
import BaseFiled from './base-field'

type Props = {
  label: string
  isError?: boolean
  type?: 'email' | 'text'
  inputProps?: Omit<ComponentProps<'input'>, 'type | id'>
  errorMessage?: string
}

const TextFiled = forwardRef<HTMLInputElement, Props>(function TextFiled(
  { label, isError, type, errorMessage, inputProps },
  ref
) {
  const id = useId()
  return (
    <BaseFiled isError={isError} errorMessage={errorMessage}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} id={id} type={type} {...inputProps} />
    </BaseFiled>
  )
})

export default TextFiled
