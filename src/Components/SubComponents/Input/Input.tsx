import classNames from 'classnames'
import React from 'react'
import { InputProps } from '../../..'
import styles from './Input.module.css'

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      type='text'
      className={classNames(styles['input-container'])}
    />
  )
}

export default Input
