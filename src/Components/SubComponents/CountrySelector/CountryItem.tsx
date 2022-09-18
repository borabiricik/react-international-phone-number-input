import React from 'react'
import styled from 'styled-components'
import { ICountry } from '../../../Types/data'
import CountryFlag from './CountryFlag'

const CountryListItem = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  align-items: center;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s;
  :hover {
    background-color: whitesmoke;
  }
`

interface Props {
  country: ICountry
  restDropdownProps: any
  handleSelect: Function
  index: number
  dropdownItemProps: any
}

const CountryItem = (props: Props) => {
  return (
    <CountryListItem
      {...props.restDropdownProps}
      key={props.index}
      onClick={() => props.handleSelect(props.country)}
    >
      <CountryFlag
        dropdownItemProps={props.dropdownItemProps as any}
        src={props.country.flags.png}
        alt=''
      />
      <div>{props.country.name.common}</div>
    </CountryListItem>
  )
}

export default CountryItem
