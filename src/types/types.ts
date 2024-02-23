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