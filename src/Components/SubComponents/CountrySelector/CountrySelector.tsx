import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ChevronIcon from '../../../assets/ChevronIcon'
import { ICountry, ICountryData } from '../../../Types/data'
import {
  ICountryItemProps,
  ICountrySelectorButtonProps,
  ICountrySelectorContainerProps,
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

interface Props {
  dropdownButtonProps?: ICountrySelectorButtonProps
  dropdownItemProps?: ICountryItemProps
  inputProps?: InputProps
  onChange?: (props: IOnChangeProps) => void
  defaultCountry?: string
}

const CountrySelector = ({
  dropdownButtonProps = {},
  dropdownItemProps = {},
  onChange,
  defaultCountry
}: Props) => {
  const { className, ...restDropdownProps } = dropdownButtonProps

  const CountrySelectorContainer = styled.div<ICountrySelectorContainerProps>`
    position: relative;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: none;
    width: ${(props) => (props.width ? `${props.width}%` : '25%')};
    min-width: ${(props) => (props.minWidth ? `${props.minWidth}%` : '25%')};
    background-color: ${dropdownButtonProps.dropdownButtonColor
      ? dropdownButtonProps.dropdownButtonColor
      : '#eff4f7'};
  `

  const SelectedCountryInnerContainer = styled.div`
    display: flex;
    align-items: center;
  `

  const [dropdownOpen, setdropdownOpen] = useState(false)
  const [countries, setcountries] = useState<Array<ICountry>>([])
  const [isCountriesLoading, setisCountriesLoading] = useState(false)
  const [selectedCountry, setselectedCountry] = useState<any>({
    name: '',
    dialCode: '',
    flagURL: ''
  })

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
    setdropdownOpen(!dropdownOpen)
  }

  const handleSelect = (country: ICountry) => {
    setselectedCountry({
      name: country.name.common,
      dialCode: country.idd.root + country.idd.suffixes[0],
      flagURL: country.flags.png
    })
    onChange &&
      onChange({
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
      {...restDropdownProps}
    >
      <div onClick={handleClick}>
        <SelectedCountryContainer>
          {selectedCountry.name.length > 0 ? (
            <SelectedCountryInnerContainer>
              <CountryFlag
                dropdownItemProps={dropdownItemProps}
                src={selectedCountry.flagURL}
              />
              {selectedCountry.dialCode}
            </SelectedCountryInnerContainer>
          ) : (
            'select'
          )}

          <ChevronIcon dropdownOpen={dropdownOpen} />
        </SelectedCountryContainer>
      </div>
      {dropdownOpen && (
        <CountryDropdown
          countries={countries}
          handleSelect={handleSelect}
          selectedCountry={selectedCountry}
          dropdownItemProps={dropdownItemProps}
        />
      )}
    </CountrySelectorContainer>
  )
}

export default CountrySelector
