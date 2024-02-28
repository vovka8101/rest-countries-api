import { FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { TCountries, TCountry } from '../types/types'

const minimalFields = ["cca3", "name", "flags", "population", "region", "capital"]
const allFields = [
  "cca3",
  "name",
  "flags",
  "population",
  "region",
  "subregion",
  "capital",
  "tld",
  "currencies",
  "languages",
  "borders"
]

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<TCountries[], null>({
      query: () => `all?fields=${minimalFields.join(",")}`
    }),
    getCountry: builder.query<TCountry, string>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const countryResult = await fetchWithBQ(`alpha/${_arg}?fields=${allFields.join(",")}`)
        if (countryResult.error)
          return { error: countryResult.error as FetchBaseQueryError }
        const countryDetails = countryResult.data as TCountry

        if (countryDetails.borders.length) {
          const bordersResult = await fetchWithBQ(`alpha?codes=${countryDetails.borders.join(",")}&fields=name,cca3`)
          const borderNames = bordersResult?.data as TCountry["borderNames"]
          return { data: { ...countryDetails, borderNames } }
        }

        return { data: countryDetails }
      },
    })
  }),
})

export const { useGetAllCountriesQuery, useGetCountryQuery } = countriesApi