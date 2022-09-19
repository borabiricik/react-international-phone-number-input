import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { IIconProps } from '../Types/UI'

interface Props extends HTMLAttributes<HTMLDivElement> {
  dropdownOpen: boolean
  iconProps?: IIconProps
}

const IconContainer = styled.svg<Props>`
  transition: all 0.3s;
  transform: ${(props) =>
    props.dropdownOpen ? 'rotate(0deg)' : 'rotate(180deg)'};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: 1.5rem;
`

const ChevronIcon = (props: Props) => {
  return (
    <IconContainer
      dropdownOpen={props.dropdownOpen}
      xmlns='http://www.w3.org/2000/svg'
      width={
        props.iconProps && props.iconProps.width ? props.iconProps.width : 12
      }
      height={
        props.iconProps && props.iconProps.height ? props.iconProps.height : 12
      }
      viewBox='0 0 12.453 7.12'
    >
      <path
        id='ic_chevron_up'
        d='M6.229,2.146l4.709,4.712a.886.886,0,0,0,1.257,0,.9.9,0,0,0,0-1.261L6.859.259A.888.888,0,0,0,5.632.233L.26,5.594A.89.89,0,0,0,1.516,6.855Z'
        fill={
          props.iconProps && props.iconProps.color
            ? props.iconProps.color
            : 'black'
        }
      />
    </IconContainer>
  )
}

export default ChevronIcon
