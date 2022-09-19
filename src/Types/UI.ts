import { HTMLAttributes } from 'react'

export interface IOnChangeProps {
  flagURL: string
  name: string
  dialCode: string
}

export interface IOnInputChangeProps {
  dialCode: string
  phoneNumber: string
}

export interface ICountrySelectorContainerProps {
  minWidth?: number
  width?: number
}

export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  borderColor?: string
}
export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  testId?: string
}
export interface ICountrySelectorButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dropdownButtonColor?: string
  enableDialCode?: boolean
  minWidth?: number
  width?: number
  iconProps?: IIconProps
  placeholder?: string
  testId?: string
}

export interface IIconProps {
  width?: number
  height?: number
  color?: string
}

export interface ICountryItemProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  flagWidth?: number
  flagHeight?: number
  characterCount?: number
}

export interface IFlagProps extends HTMLAttributes<HTMLDivElement> {
  rounded?: boolean
}
