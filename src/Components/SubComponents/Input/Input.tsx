import classNames from 'classnames'
import React from 'react'
import { InputProps, IOnInputChangeProps } from '../../../Types/UI'
import styles from './Input.module.css'

interface InputComponentProps extends InputProps {
  dialCode: string
  onInputChange?: (props: IOnInputChangeProps) => void
}

const Input = (props: InputComponentProps) => {
  const { dialCode } = props
  return (
    <input
      {...props}
      type='number'
      className={classNames(styles['input-container'])}
      onChange={(e) => {
        props.onInputChange &&
          props.onInputChange({ dialCode, phoneNumber: e.target.value })
      }}
    />
  )
}

export default Input
