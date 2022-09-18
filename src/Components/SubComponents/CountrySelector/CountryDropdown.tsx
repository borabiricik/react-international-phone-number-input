import classNames from 'classnames'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ICountry } from '../../../Types/data'
import { ICountryItemProps, IFlagProps } from '../../../Types/UI'
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
  background-color: white;
  border: 1px solid #b5b5c3;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`

interface Props {
  countries: Array<ICountry>
  handleSelect: ((country: ICountry) => void) | null
  dropdownItemProps: ICountryItemProps
  selectedCountry: ICountry
  flagProps: IFlagProps
  disableCountrySelect: boolean
  setDropdownopen: Function
}

const CountryDropdown = (props: Props) => {
  const { countries, handleSelect, dropdownItemProps } = props
  const { className: dropdownItemClassName, ...restdropdownItemProps } =
    dropdownItemProps

  const dropdownRef = useRef<any>(null)

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true)
    return () => {
      document.removeEventListener('click', handleOutsideClick, false)
    }
  }, [])

  const handleOutsideClick = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      props.setDropdownopen(false)
    }
  }

  return (
    <div ref={dropdownRef}>
      <CountryDropdownContainer className={classNames('dropdown-container')}>
        <CountryListContainer style={{}}>
          {countries.length > 0 ? (
            <React.Fragment>
              {countries.map((country, index) => {
                return (
                  <CountryItem
                    key={index}
                    flagProps={props.flagProps}
                    restDropdownProps={restdropdownItemProps}
                    dropdownItemProps={dropdownItemProps}
                    handleSelect={
                      !props.disableCountrySelect ? handleSelect : null
                    }
                    country={country}
                    index={index}
                    disableCountrySelect={props.disableCountrySelect}
                  />
                )
              })}
            </React.Fragment>
          ) : (
            <div>loading...</div>
          )}
        </CountryListContainer>
      </CountryDropdownContainer>
    </div>
  )
}

export default CountryDropdown
