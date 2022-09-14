import classNames from 'classnames'
import * as React from 'react'
import CountrySelector from './Components/SubComponents/CountrySelector/CountrySelector'
import Input from './Components/SubComponents/Input/Input'
import styles from './styles.module.css'

export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface ICountrySelectorButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dropdownButtonColor?: 'string'
}

export interface ICountryItemProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  flagWidth?: number
  flagHeight?: number
  characterCount?: number
}

interface Props {
  containerProps?: IContainerProps
  inputProps?: InputProps
  dropdownButtonProps?: ICountrySelectorButtonProps
  dropdownItemProps?: ICountryItemProps
}

export const PhoneInput = ({
  containerProps = {},
  inputProps = {},
  dropdownButtonProps = {}
}: Props) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps
  return (
    <div
      {...restContainerProps}
      className={classNames(
        containerClassName ? containerClassName : '',
        styles['container']
      )}
    >
      <CountrySelector dropdownButtonProps={dropdownButtonProps} />
      <Input {...inputProps} />
    </div>
  )
}
