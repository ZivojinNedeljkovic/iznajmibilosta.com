'use client'
import './html.scss'
import React, { ReactNode } from 'react'
import { useAppSelector } from '@lib/redux/hooks'
import selectTheme from '@layout/store/select-theme'
import classNames from 'classnames'

type Props = {
  children: ReactNode
}

function Html({ children }: Props) {
  const theme = useAppSelector(selectTheme)

  return (
    <html
      lang="sr"
      className={classNames({
        ['light-theme']: theme === 'light',
        ['dark-theme']: theme === 'dark',
      })}
    >
      {children}
    </html>
  )
}

export default Html
