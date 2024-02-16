'use client'
import React, { useRef } from 'react'
import Card from '@auth/components/card'
import styles from './page.module.scss'
import TextButton from '@ui/buttons/text-button'

function VerifyEmailPage() {
  const emailRef = useRef(sessionStorage.getItem('email'))
  const email = emailRef.current
  return (
    <main className={styles.wrapper}>
      <Card>
        <Card.H1>Skoro pa gotovo!</Card.H1>
        <Card.P>
          Poslali smo Vam aktivacioni e-mail na:{' '}
          <a href={`mailto:${email}`}>{email}</a>
        </Card.P>
        <Card.P>Ako Van nije stigao e-mail:</Card.P>
        <TextButton type="button">
          Pošaljite ponovo aktivacioni e-mail
        </TextButton>
      </Card>
    </main>
  )
}

export default VerifyEmailPage
