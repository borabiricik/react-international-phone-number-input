import { AxiosResponse } from 'axios'

export interface ICountry {
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
  cca2: string
}

export interface ICountryData extends AxiosResponse {
  data: ICountry[]
}
