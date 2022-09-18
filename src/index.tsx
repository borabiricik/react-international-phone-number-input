import classNames from 'classnames'
import * as React from 'react'
import CountrySelector from './Components/SubComponents/CountrySelector/CountrySelector'
import Input from './Components/SubComponents/Input/Input'
import styles from './styles.module.css'
import {
  IContainerProps,
  ICountryItemProps,
  ICountrySelectorButtonProps,
  IFlagProps,
  InputProps,
  IOnChangeProps
} from './Types/UI'

interface Props {
  containerProps?: IContainerProps
  inputProps?: InputProps
  dropdownButtonProps?: ICountrySelectorButtonProps
  dropdownItemProps?: ICountryItemProps
  onChange?: (props: IOnChangeProps) => void
  defaultCountry?: string
  flagProps?: IFlagProps
}

export const PhoneInput = ({
  containerProps = {},
  inputProps = {},
  dropdownButtonProps = {},
  onChange,
  defaultCountry,
  flagProps = { rounded: false }
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
      <CountrySelector
        flagProps={flagProps}
        defaultCountry={defaultCountry}
        onChange={onChange}
        dropdownButtonProps={dropdownButtonProps}
      />
      <Input {...inputProps} />
    </div>
  )
}
