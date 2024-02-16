import React, { ComponentProps } from 'react'
import styles from './card.module.scss'
import H1 from '@ui/h1'
import classNames from 'classnames'
import P from '@ui/p'

function Card(props: ComponentProps<'div'>) {
  return <div {...props} className={classNames(styles.card, props.className)} />
}

Card.H1 = function CardH1(props: ComponentProps<typeof H1>) {
  return <H1 {...props} className={classNames(styles.h1, props.className)} />
}

Card.P = function CardP(props: ComponentProps<typeof P>) {
  return <P {...props} className={classNames(styles.p, props.className)} />
}

export default Card
