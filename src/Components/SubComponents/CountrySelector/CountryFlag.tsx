import React from 'react'
import styled from 'styled-components'

const StyledCountryFlag = styled.img<any>`
  border-radius: ${(props) => {
    return props.flagProps && props.flagProps.rounded ? '50%' : '5px'
  }};

  width: ${(props: any) => {
    return props.dropdownItemProps.flagWidth
      ? props.dropdownItemProps.flagWidth
      : '24px'
  }};
  height: ${(props: any) => {
    return props.dropdownItemProps.flagHeight
      ? props.dropdownItemProps.flagHeight
      : '24px'
  }};
  margin-right: 5px;
`

const CountryFlag = (props: any) => {
  return <StyledCountryFlag {...props} />
}

export default CountryFlag
