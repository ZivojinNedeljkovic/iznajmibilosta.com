import React, { ComponentProps } from 'react'
import styles from './p.module.scss'
import cn from 'classnames'

function P(props: ComponentProps<'p'>) {
  return <p {...props} className={cn(props.className, styles.p)} />
}

export default P
