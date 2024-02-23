'use client'
import React, { useRef } from 'react'
import styles from './session-email-link.module.scss'

function SessionEmailLink() {
  const emailRef = useRef('e6uev9bw7m@lettershield.com')
  const email = emailRef.current

  return (
    <a href={`mailto:${email}`} className={styles.link}>
      {email}
    </a>
  )
}

export default SessionEmailLink
