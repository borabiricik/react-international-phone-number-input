import React from 'react'
import styled from 'styled-components'
import { ICountry } from '../../../Types/data'
import { IFlagProps } from '../../../Types/UI'
import CountryFlag from './CountryFlag'

const CountryListItem = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  align-items: center;
  cursor: pointer;
  width: 100%;
  padding: 0.5rem 0.25rem;
  transition: all 0.3s;
  :hover {
    background-color: whitesmoke;
  }
`

interface Props {
  country: ICountry
  restDropdownProps: any
  handleSelect: ((country: ICountry) => void) | null
  index: number
  dropdownItemProps: any
  flagProps: IFlagProps
  disableCountrySelect: boolean
}

const CountryItem = (props: Props) => {
  return (
    <CountryListItem
      {...props.restDropdownProps}
      key={props.index}
      onClick={() =>
        props.handleSelect &&
        !props.disableCountrySelect &&
        props.handleSelect(props.country)
      }
    >
      <CountryFlag
        flagProps={props.flagProps}
        dropdownItemProps={props.dropdownItemProps as any}
        src={props.country.flags.png}
        alt=''
      />
      <div>{props.country.name.common}</div>
    </CountryListItem>
  )
}

export default CountryItem
