'use client'
import React from 'react'
import HeaderMobile from '../header-mobile/header-mobile'
import { useAppSelector } from '@lib/redux/hooks'

function Header() {
  const email = useAppSelector(state => state.user.email)
  return (
    <>
      <HeaderMobile />
      <p>{email}</p>
    </>
  )
}

export default Header
