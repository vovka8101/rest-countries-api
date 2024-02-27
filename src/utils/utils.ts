import { TCurrencies, TLanguages, TNativeName } from "../types/types"

export const getNativeNames = (nativeNames: TNativeName) => {
  const names: string[] = []

  for (const key in nativeNames) {
    names.push(`${nativeNames[key].common}<sup>${key}</sup>`)
  }

  return names.join(", ")
}

export const getCurrencies = (currencies: TCurrencies) => {
  const currenciesArr: string[] = []

  for (const key in currencies) {
    currenciesArr.push(currencies[key].name)
  }

  return currenciesArr.join(", ")
}

export const getLanguages = (languages: TLanguages) => {
  const languagesArr: string[] = []

  for (const key in languages) {
    languagesArr.push(languages[key])
  }

  return languagesArr.join(", ")
}