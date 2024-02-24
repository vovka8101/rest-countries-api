import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { TCountries, TCountry } from '../types/types'

const minimalFields = ["name", "flags", "population", "region", "capital"]
const allFields = [
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
    getCountry: builder.query<TCountry[], string>({
      query: (name) => `name/${name}?fields=${allFields.join(",")}`
    })
  }),
})

export const { useGetAllCountriesQuery, useGetCountryQuery } = countriesApi