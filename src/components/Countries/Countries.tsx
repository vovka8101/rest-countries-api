import { useState } from "react"
import { useGetAllCountriesQuery } from "../../services/countriesApi"
import { Country } from "./Country"
import { Search } from "./Search/Search"
import "./styles.css"
import { Preloader } from "../Preloader/Preloader"

export const Countries = () => {
  const { data, error, isLoading } = useGetAllCountriesQuery(null)
  const [search, setSearch] = useState(new RegExp("", "i"))

  const handleSearch = (value: string) => {
    setSearch(new RegExp(value, "i"))
  }

  const countries = data?.filter(country => search.test(country.name.common)).map(country => (
    <Country key={country.name.common} country={country} />
  ))

  return (
    <div className="main-content content">
      <Search handleSearch={handleSearch} />
      {isLoading && <Preloader />}
      <section className="countries">
        {error && <p>An error occured</p>}
        {!isLoading && !error && [countries]}
      </section>
    </div>
  )
}
