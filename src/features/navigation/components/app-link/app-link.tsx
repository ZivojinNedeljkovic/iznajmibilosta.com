import Link from 'next/link'
import React, { ComponentProps } from 'react'
import styles from './app-link.module.scss'
import classNames from 'classnames'

function AppLink(props: ComponentProps<typeof Link>) {
  return (
    <Link {...props} className={classNames(props.className, styles.link)} />
  )
}

export default AppLink
