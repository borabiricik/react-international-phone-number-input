import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from './CountrySelector.module.css'
import { ICountryItemProps, ICountrySelectorButtonProps } from '../../..'
import axios, { AxiosResponse } from 'axios'

interface Props {
  dropdownButtonProps?: ICountrySelectorButtonProps
  dropdownItemProps?: ICountryItemProps
}

interface ICountry {
  name: {
    common: string
    official: string
  }
  idd: {
    root: string
    suffixes: Array<string>
  }
  flags: {
    png: string
    svg: string
  }
}

interface ICountryData extends AxiosResponse {
  data: ICountry[]
}

const CountrySelector = ({
  dropdownButtonProps = {},
  dropdownItemProps = {}
}: Props) => {
  const { className, ...restDropdownProps } = dropdownButtonProps
  const { className: dropdownItemClassName, ...restdropdownItemProps } =
    dropdownItemProps
  const [dropdownOpen, setdropdownOpen] = useState(false)
  const [countries, setcountries] = useState<Array<ICountry>>([])
  const [selectedCountry, setselectedCountry] = useState({
    name: '',
    dialCode: ''
  })
  const handleClick = () => {
    setdropdownOpen(!dropdownOpen)
  }

  const handleSelect = (country: ICountry) => {
    console.log(country)
    setselectedCountry({
      name: '',
      dialCode: ''
    })
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res: ICountryData) => {
        setcountries(
          res.data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        )
      })
  }, [])

  return (
    <div
      {...restDropdownProps}
      className={classNames(
        styles['country-selector-container'],
        dropdownButtonProps.dropdownButtonColor
          ? ''
          : styles['dropdown-default-background'],
        className
      )}
      style={{
        backgroundColor: dropdownButtonProps.dropdownButtonColor
          ? dropdownButtonProps.dropdownButtonColor
          : '#eff4f7'
      }}
    >
      <div onClick={handleClick}>
        {selectedCountry.name.length > 0 ? selectedCountry.name : 'select'}
      </div>
      {dropdownOpen && (
        <div
          className={styles['dropdown-container']}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            height: '200px',
            overflowY: 'scroll',
            scrollbarWidth: 'none'
          }}
        >
          {countries.length > 0 ? (
            <div>
              {countries.map((country, index) => {
                return (
                  <button
                    {...restdropdownItemProps}
                    key={index}
                    onClick={() => handleSelect(country)}
                    style={{
                      display: 'flex',
                      background: 'transparent',
                      border: 'none',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <img
                      style={{
                        width: dropdownItemProps.flagWidth
                          ? dropdownItemProps.flagWidth
                          : 20,
                        height: dropdownItemProps.flagHeight
                          ? dropdownItemProps.flagHeight
                          : 20,
                        objectFit: 'contain',
                        padding: 5
                      }}
                      src={country.flags.png}
                      alt=''
                    />
                    <div>
                      {dropdownItemProps.characterCount
                        ? dropdownItemProps.characterCount
                        : `${country.name.common.slice(0, 7)}${
                            country.name.common.length > 10 ? '...' : ''
                          }`}
                    </div>
                  </button>
                )
              })}
            </div>
          ) : (
            <div>loading...</div>
          )}
        </div>
      )}
    </div>
  )
}

export default CountrySelector
