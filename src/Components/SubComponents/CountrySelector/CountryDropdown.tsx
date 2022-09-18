import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'
import { ICountry } from '../../../Types/data'
import { ICountryItemProps } from '../../../Types/UI'
import CountryItem from './CountryItem'

const CountryDropdownContainer = styled.div``

const CountryListContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  height: 200px;
  overflow-y: scroll;
  scrollbar-width: 0;
  border: 1px solid #b5b5c3;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`

interface Props {
  countries: Array<ICountry>
  handleSelect: Function
  dropdownItemProps: ICountryItemProps
  selectedCountry: ICountry
}

const CountryDropdown = (props: Props) => {
  const { countries, handleSelect, dropdownItemProps } = props
  const { className: dropdownItemClassName, ...restdropdownItemProps } =
    dropdownItemProps

  return (
    <CountryDropdownContainer className={classNames('dropdown-container')}>
      <CountryListContainer style={{}}>
        {countries.length > 0 ? (
          <React.Fragment>
            {countries.map((country, index) => {
              return (
                <CountryItem
                  restDropdownProps={restdropdownItemProps}
                  dropdownItemProps={dropdownItemProps}
                  handleSelect={handleSelect}
                  country={country}
                  index={index}
                />
              )
            })}
          </React.Fragment>
        ) : (
          <div>loading...</div>
        )}
      </CountryListContainer>
    </CountryDropdownContainer>
  )
}

export default CountryDropdown
