'use client'
import React, { useEffect } from 'react'
import HeaderMobile from '../header-mobile/header-mobile'
import { useAppSelector } from '@lib/redux/hooks'
import ThemeToggleButton from '../theme-toggle-button'

function Header() {
  const email = useAppSelector(state => state.user.email)
  const theme = useAppSelector(state => state.layout.theme)
  useEffect(() => {
    const theme =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    console.log(theme)
  }, [])
  return (
    <>
      <HeaderMobile />
      <ThemeToggleButton />
      <p>{email}</p>
    </>
  )
}

export default Header
