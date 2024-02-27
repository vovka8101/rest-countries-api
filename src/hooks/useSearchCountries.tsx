import { useState } from "react"
import { TCountries } from "../types/types"
import { useDebounce } from 'use-debounce';

export const useSearchCountries = (data: TCountries[] | undefined) => {
  const [searchName, setSearchName] = useState(new RegExp("", "i"))
  const [debouncedSearchName] = useDebounce(searchName, 500)
  const [selectedRegion, setSelectedRegion] = useState("")

  const countries = data?.filter(country => {
    const isFoundedByName = debouncedSearchName.test(country.name.common)
    const isFoundedByFilter = selectedRegion
      ? (country.region === selectedRegion)
      : true

    return isFoundedByName && isFoundedByFilter
  })

  const searchCountries = (name: string) => {
    setSearchName(new RegExp(name, "i"))
  }

  const selectFilter = (region: string) => {
    setSelectedRegion(region)
  }

  return { countries, searchCountries, selectFilter }
}
