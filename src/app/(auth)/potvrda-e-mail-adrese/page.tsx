import React from 'react'
import Card from '@auth/components/card'
import styles from './page.module.scss'
import TextButton from '@ui/buttons/text-button'
import SessionEmailLink from '@auth/components/session-email-link'

function VerifyEmailPage() {
  return (
    <main className={styles.wrapper}>
      <Card>
        <Card.H1>Skoro pa gotovo!</Card.H1>
        <Card.P>
          Poslali smo Vam aktivacioni e-mail na: <SessionEmailLink />
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
