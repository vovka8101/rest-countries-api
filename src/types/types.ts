export type Theme = {
  value: "dark" | "light"
}

export type TCountries = {
  name: { common: string }
  flags: { svg: string, alt: string }
  population: number
  region: string
  capital: string[]
}

export type TNativeName = {
  [key: string]: { common: string }
}

export type TCountry = {
  name: {
    common: string
    nativeName: TNativeName
  }
  flags: { svg: string, alt: string }
  population: number
  region: string
  subregion: string
  capital: string[]
  tld: string[]
  currencies: { [key: string]: { name: string, symbol: string } }
  languages: { [key: string]: string }
  borders: string[]
}