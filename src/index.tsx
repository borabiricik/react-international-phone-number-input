import classNames from 'classnames'
import * as React from 'react'
import styled from 'styled-components'
import CountrySelector from './Components/SubComponents/CountrySelector/CountrySelector'
import Input, {
  InputComponentProps
} from './Components/SubComponents/Input/Input'
import {
  IContainerProps,
  ICountryItemProps,
  ICountrySelectorButtonProps,
  IFlagProps,
  IOnChangeProps,
  IOnInputChangeProps
} from './Types/UI'

interface Props {
  containerProps?: IContainerProps
  inputProps?: InputComponentProps
  dropdownButtonProps?: ICountrySelectorButtonProps
  dropdownItemProps?: ICountryItemProps
  onChange?: (props: IOnChangeProps) => void
  defaultCountry?: string
  flagProps?: IFlagProps
  onInputChange?: (props: IOnInputChangeProps) => void
  disableCountrySelect?: boolean
  value?: string | number
  prepend?: React.ReactElement
}

const AppContainer = styled.div<{ containerProps: IContainerProps }>`
  display: flex;
  align-items: center;
  border: 1px solid
    ${(props) =>
      props.containerProps.borderColor
        ? props.containerProps.borderColor
        : '#b5b5c3'};
  border-radius: 5px;
`

export const PhoneInput = ({
  containerProps = {},
  inputProps = {},
  dropdownButtonProps = {},
  onChange,
  onInputChange,
  defaultCountry,
  flagProps = { rounded: false },
  disableCountrySelect = false,
  prepend
}: Props) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps

  const [selectedCountry, setselectedCountry] = React.useState<any>({
    name: '',
    dialCode: '',
    flagURL: ''
  })

  return (
    <AppContainer
      containerProps={containerProps}
      {...restContainerProps}
      className={classNames(containerClassName ? containerClassName : '')}
    >
      <CountrySelector
        selectedCountry={selectedCountry}
        setselectedCountry={setselectedCountry}
        flagProps={flagProps}
        defaultCountry={defaultCountry}
        onChange={onChange}
        dropdownButtonProps={dropdownButtonProps}
        disableCountrySelect={disableCountrySelect}
        containerProps={containerProps}
      />
      <Input
        onInputChange={onInputChange}
        dialCode={selectedCountry.dialCode}
        {...inputProps}
      />
      {prepend && prepend}
    </AppContainer>
  )
}
