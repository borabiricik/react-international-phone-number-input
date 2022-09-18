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
  IOnChangeProps,
  IOnInputChangeProps
} from './Types/UI'

interface Props {
  containerProps?: IContainerProps
  inputProps?: InputProps
  dropdownButtonProps?: ICountrySelectorButtonProps
  dropdownItemProps?: ICountryItemProps
  onChange?: (props: IOnChangeProps) => void
  defaultCountry?: string
  flagProps?: IFlagProps
  onInputChange?: (props: IOnInputChangeProps) => void
  disableCountrySelect?: boolean
}

export const PhoneInput = ({
  containerProps = {},
  inputProps = {},
  dropdownButtonProps = {},
  onChange,
  onInputChange,
  defaultCountry,
  flagProps = { rounded: false },
  disableCountrySelect = false
}: Props) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps

  const [selectedCountry, setselectedCountry] = React.useState<any>({
    name: '',
    dialCode: '',
    flagURL: ''
  })

  return (
    <div
      {...restContainerProps}
      className={classNames(
        containerClassName ? containerClassName : '',
        styles['container']
      )}
    >
      <CountrySelector
        selectedCountry={selectedCountry}
        setselectedCountry={setselectedCountry}
        flagProps={flagProps}
        defaultCountry={defaultCountry}
        onChange={onChange}
        dropdownButtonProps={dropdownButtonProps}
        disableCountrySelect={disableCountrySelect}
      />
      <Input
        onInputChange={onInputChange}
        dialCode={selectedCountry.dialCode}
        {...inputProps}
      />
    </div>
  )
}
