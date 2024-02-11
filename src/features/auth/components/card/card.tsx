import React, { ComponentProps } from 'react'
import styles from './card.module.scss'

function Card(props: ComponentProps<'div'>) {
  return <div {...props} className={styles.card} />
}

export default Card
