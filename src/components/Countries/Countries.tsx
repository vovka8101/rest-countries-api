import { useGetAllCountriesQuery } from "../../services/countriesApi"
import { Country } from "./Country"
import { Search } from "./Search/Search"
import "./styles.css"

export const Countries = () => {
  const { data, error, isLoading } = useGetAllCountriesQuery(null)

  return (
    <main className="main">
      <div className="main-content content">
        <Search />
        <section className="countries">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>An error occured:</p>
          ) : (
            data?.map(country => (
              <Country key={country.name.common} country={country} />
            ))
          )}
        </section>
      </div>
    </main>
  )
}
