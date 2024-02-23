import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { TCountries } from '../types/types'

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<TCountries[], null>({
      query: () => `all?fields=name,flags,population,region,capital`
    }),
  }),
})

export const { useGetAllCountriesQuery } = countriesApi