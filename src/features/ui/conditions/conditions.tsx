import React from 'react'
import styles from './conditions.module.scss'
import ConditionIcon from '../icons/condition-icon'
import classNames from 'classnames'
import ErrorIcon from '../icons/error-icon'

type Props = {
  conditions: {
    description: string
    isTrue: boolean
  }[]
  hasError: boolean
}

function Conditions({ conditions, hasError }: Props) {
  return (
    <ul className={styles.wrapper}>
      {conditions.map(({ description, isTrue }) => (
        <li
          key={description}
          className={classNames({ [styles['is-true']]: isTrue })}
        >
          {!isTrue && hasError ? <ErrorIcon /> : <ConditionIcon />}
          <p>{description}</p>
        </li>
      ))}
    </ul>
  )
}

export default Conditions
