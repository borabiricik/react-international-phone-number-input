import React from 'react'
import styled from 'styled-components'

const StyledCountryFlag = styled.div<any>`
  border-radius: ${(props) => {
    return props.flagProps && props.flagProps.rounded ? '50%' : '5px'
  }};
  width: ${(props: any) => {
    return props.dropdownItemProps.flagWidth
      ? props.dropdownItemProps.flagWidth
      : '30px'
  }};
  height: ${(props: any) => {
    return props.dropdownItemProps.flagHeight
      ? props.dropdownItemProps.flagHeight
      : '30px'
  }};
  background-image: url(${(props) => props.src});
  background-position: 25% center;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: border-box;
  margin-right: 5px;
`

const CountryFlag = (props: any) => {
  return <StyledCountryFlag {...props} />
}

export default CountryFlag
