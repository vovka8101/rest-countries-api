export type Theme = {
  value: "dark" | "light"
}

export type TCountries = {
  cca3: string
  name: { common: string }
  flags: { svg: string, alt: string }
  population: number
  region: string
  capital: string[]
}

export type TNativeName = {
  [key: string]: { common: string }
}

export type TCurrencies = {
  [key: string]: { name: string, symbol: string }
}

export type TLanguages = {
  [key: string]: string
}

export type TCountry = {
  cca3: string
  name: {
    official: string
    nativeName: TNativeName
  }
  flags: { svg: string, alt: string }
  population: number
  region: string
  subregion: string
  capital: string[]
  tld: string[]
  currencies: TCurrencies
  languages: TLanguages
  borders: string[]
  borderNames?: {
    name: { common: string }
    cca3: string
  }[]
}