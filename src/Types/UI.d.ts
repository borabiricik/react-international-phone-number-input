export interface IOnChangeProps {
  flagURL: string
  name: string
  dialCode: string
}

export interface ICountrySelectorContainerProps {
  minWidth?: number
  width?: number
}

export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface ICountrySelectorButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dropdownButtonColor?: 'string'
  enableDialCode?: boolean
  minWidth?: number
  width?: number
}

export interface ICountryItemProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  flagWidth?: number
  flagHeight?: number
  characterCount?: number
}
export {}