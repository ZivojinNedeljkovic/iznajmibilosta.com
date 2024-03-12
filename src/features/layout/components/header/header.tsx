'use client'
import React, { useEffect } from 'react'
import HeaderMobile from '../header-mobile/header-mobile'
import { useAppSelector } from '@lib/redux/hooks'
import ThemeToggleButton from '../theme-toggle-button'

function Header() {
  const email = useAppSelector(state => state.user.email)

  return (
    <>
      <HeaderMobile />
    </>
  )
}

export default Header
