import classNames from 'classnames'
import * as React from 'react'
import styled from 'styled-components'
import CountrySelector from './Components/SubComponents/CountrySelector/CountrySelector'
import Input from './Components/SubComponents/Input/Input'
import { IContainerProps, IPhoneInputProps } from './Types/UI'

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
}: IPhoneInputProps) => {
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
