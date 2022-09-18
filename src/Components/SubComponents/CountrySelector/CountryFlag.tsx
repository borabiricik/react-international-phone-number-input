import React from 'react'
import styled from 'styled-components'

const StyledCountryFlag = styled.img<any>`
  width: ${(props: any) => {
    return props.dropdownItemProps.flagWidth
      ? props.dropdownItemProps.flagWidth
      : '20px'
  }};
  height: ${(props: any) => {
    return props.dropdownItemProps.flagHeight
      ? props.dropdownItemProps.flagHeight
      : '20px'
  }};
  object-fit: contain;
  padding: 5px;
`

const CountryFlag = (props: any) => {
  return <StyledCountryFlag {...props} />
}

export default CountryFlag
