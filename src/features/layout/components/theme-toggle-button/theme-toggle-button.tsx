'use client'
import React from 'react'
import LightThemeIcon from './light-theme-icon'
import DarkThemeIcon from './dark-theme-icon'
import './theme-toggle-button.scss'
import { useAppDispatch, useAppSelector } from '@lib/redux/hooks'
import selectTheme from '@layout/store/select-theme'
import getPreferredColorSchema from '../helpers/getDefaultTheme'
import { setTheme } from '@layout/store/layout-slice'

function ThemeToggleButton() {
  const theme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  async function toggleTheme() {
    const current = theme === 'auto' ? getPreferredColorSchema() : theme
    const newTheme = current === 'light' ? 'dark' : 'light'
    const Cookies = (await import('universal-cookie')).default
    const cookies = new Cookies(null, { path: '/' })
    cookies.set('theme', newTheme)
    dispatch(setTheme(newTheme))
  }
  return (
    <button className={'theme-toggle-button'} onClick={toggleTheme}>
      <LightThemeIcon className={'theme-toggle-button-light-icon'} />
      <DarkThemeIcon className={'theme-toggle-button-dark-icon'} />
    </button>
  )
}

export default ThemeToggleButton
