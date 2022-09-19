import axios from 'axios'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ChevronIcon from '../../../assets/ChevronIcon'
import { ICountry, ICountryData } from '../../../Types/data'
import {
  IContainerProps,
  ICountryItemProps,
  ICountrySelectorButtonProps,
  IFlagProps,
  InputProps,
  IOnChangeProps
} from '../../../Types/UI'
import CountryDropdown from './CountryDropdown'
import CountryFlag from './CountryFlag'

const SelectedCountryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DialCode = styled.span`
  margin-right: 5px;
`

const CountrySelectorContainer = styled.div<{
  dropdownProps: ICountrySelectorButtonProps
  containerProps: IContainerProps
}>`
  position: relative;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  border-right: 1px solid
    ${(props) =>
      props.containerProps.borderColor
        ? props.containerProps.borderColor
        : '#b5b5c3'};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: ${(props) =>
    props.dropdownProps.dropdownButtonColor
      ? props.dropdownProps.dropdownButtonColor
      : '#eff4f7'};
`

interface Props {
  dropdownButtonProps?: ICountrySelectorButtonProps
  dropdownItemProps?: ICountryItemProps
  inputProps?: InputProps
  onChange?: (props: IOnChangeProps) => void
  defaultCountry?: string
  flagProps: IFlagProps
  selectedCountry: any
  setselectedCountry: Function
  disableCountrySelect: boolean
  containerProps: IContainerProps
}

const CountrySelector = ({
  dropdownButtonProps = {},
  dropdownItemProps = {},
  containerProps = {},
  defaultCountry,
  flagProps,
  selectedCountry,
  setselectedCountry,
  disableCountrySelect
}: Props) => {
  const { className, testId, ...restDropdownProps } = dropdownButtonProps

  const SelectedCountryInnerContainer = styled.div`
    display: flex;
    align-items: center;
  `
  // const { width } = useWindowSize()
  const [dropdownOpen, setdropdownOpen] = useState(false)
  const [countries, setcountries] = useState<Array<ICountry>>([])
  const [isCountriesLoading, setisCountriesLoading] = useState(false)

  useEffect(() => {
    if (
      !isCountriesLoading &&
      countries.length > 0 &&
      defaultCountry &&
      defaultCountry.length > 0
    ) {
      const foundCountry = countries.find(
        (country) => country.cca2 === defaultCountry.toUpperCase()
      )
      if (foundCountry) {
        setselectedCountry({
          name: foundCountry.name.common,
          dialCode: foundCountry.idd.root + foundCountry.idd.suffixes[0],
          flagURL: foundCountry.flags.png
        })
      }
    }
  }, [defaultCountry, countries, isCountriesLoading])

  const handleClick = () => {
    if (disableCountrySelect === false) setdropdownOpen(!dropdownOpen)
  }

  const handleSelect = (country: ICountry) => {
    setselectedCountry({
      name: country.name.common,
      dialCode: country.idd.root + country.idd.suffixes[0],
      flagURL: country.flags.png
    })
  }

  useEffect(() => {
    setisCountriesLoading(true)
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res: ICountryData) => {
        setcountries(
          res.data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        )
        setisCountriesLoading(false)
      })
  }, [])

  return (
    <CountrySelectorContainer
      onClick={(e) => {
        handleClick()
        dropdownButtonProps.onClick && dropdownButtonProps.onClick(e)
      }}
      data-test-id={testId}
      {...restDropdownProps}
      className={classNames(className)}
      containerProps={containerProps}
      dropdownProps={dropdownButtonProps}
    >
      <div onClick={!disableCountrySelect ? handleClick : () => {}}>
        <SelectedCountryContainer>
          {selectedCountry.name.length > 0 ? (
            <SelectedCountryInnerContainer>
              <CountryFlag
                flagProps={flagProps}
                dropdownItemProps={dropdownItemProps}
                src={selectedCountry.flagURL}
              />
              <DialCode>{selectedCountry.dialCode}</DialCode>
              {/* {width > 768 && selectedCountry.name} */}
            </SelectedCountryInnerContainer>
          ) : dropdownButtonProps.placeholder ? (
            dropdownButtonProps.placeholder
          ) : (
            'Select'
          )}

          {!disableCountrySelect && (
            <ChevronIcon
              iconProps={dropdownButtonProps.iconProps}
              dropdownOpen={dropdownOpen}
            />
          )}
        </SelectedCountryContainer>
      </div>
      {dropdownOpen && (
        <CountryDropdown
          setDropdownopen={setdropdownOpen}
          flagProps={flagProps}
          countries={countries}
          handleSelect={!disableCountrySelect ? handleSelect : null}
          selectedCountry={selectedCountry}
          dropdownItemProps={dropdownItemProps}
          disableCountrySelect={disableCountrySelect}
        />
      )}
    </CountrySelectorContainer>
  )
}

export default CountrySelector
