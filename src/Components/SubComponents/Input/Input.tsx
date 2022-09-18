import classNames from 'classnames'
import React from 'react'
import { InputProps, IOnInputChangeProps } from '../../../Types/UI'
import styles from './Input.module.css'

export interface InputComponentProps extends InputProps {
  dialCode?: string
  onInputChange?: (props: IOnInputChangeProps) => void
}

const Input = (props: InputComponentProps) => {
  const { dialCode, onInputChange, defaultValue, ...rest } = props
  return (
    <input
      {...rest}
      type='number'
      className={classNames(styles['input-container'])}
      onChange={(e) => {
        onInputChange &&
          onInputChange({
            dialCode: dialCode ? dialCode : '',
            phoneNumber: e.target.value
          })
      }}
    />
  )
}

export default Input
