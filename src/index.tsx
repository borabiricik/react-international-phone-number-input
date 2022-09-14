import classnames from 'classnames'
import * as React from 'react'
import CountrySelector from './Components/SubComponents/CountrySelector/CountrySelector'
import Input from './Components/SubComponents/Input/Input'
import styles from './styles.module.css'

interface Props {
  containerClassName?: string | string[]
  inputClassName?: string | string[]
}

export const ExampleComponent = ({ containerClassName }: Props) => {
  return (
    <div
      className={classnames(
        containerClassName,
        styles['phone-number-container']
      )}
    >
      <CountrySelector />
      <Input />
    </div>
  )
}
