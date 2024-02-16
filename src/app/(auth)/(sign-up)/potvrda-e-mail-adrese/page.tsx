'use client'
import React from 'react'
import Card from '@auth/components/card'
import styles from './page.module.scss'
import TextButton from '@ui/buttons/text-button'
import { useEmailContext } from '@auth/context/email-context'

function VerifyEmailPage() {
  const { email } = useEmailContext()
  return (
    <main className={styles.wrapper}>
      <Card>
        <Card.H1>Skoro pa gotovo!</Card.H1>
        <Card.P>
          Poslali smo Vam aktivacioni e-mail na:{' '}
          <a href={`mailto:${email}`}>{email}</a>
        </Card.P>
        <Card.P>Ako Van minje stigao e-mail:</Card.P>
        <TextButton type="button">
          Pošalji te ponovo aktivacioni e-mail
        </TextButton>
      </Card>
    </main>
  )
}

export default VerifyEmailPage
