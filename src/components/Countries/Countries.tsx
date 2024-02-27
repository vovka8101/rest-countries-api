import { useState } from "react"
import { useGetAllCountriesQuery } from "../../services/countriesApi"
import { Country } from "./Country"
import { Search } from "./Search/Search"
import "./styles.css"
import { Preloader } from "../Preloader/Preloader"
import InfiniteScroll from "react-infinite-scroll-component"
import { useSearchCountries } from "../../hooks/useSearchCountries"

const itemsPerPage = 20

export const Countries = () => {
  const { data, error, isLoading } = useGetAllCountriesQuery(null)
  const { countries, searchCountries, selectFilter } = useSearchCountries(data)
  const [currentPage, setCurrentPage] = useState(1)

  const handleSearch = (value: string, type: "input" | "filter") => {
    if (type === "input") {
      searchCountries(value)
    } else if (type === "filter") {
      selectFilter(value)
    }

    setCurrentPage(1)
  }

  const slicedCountries = countries
    ?.slice(0, currentPage * itemsPerPage)
    .map(country => (
      <Country key={country.name.common} country={country} />
  ))

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className="main-content content">
      <Search
        handleSearch={handleSearch}
      />
      {isLoading && <Preloader />}
      <InfiniteScroll
        dataLength={slicedCountries?.length || 0}
        next={handleLoadMore}
        hasMore={!!(slicedCountries?.length && countries?.length)
          && (slicedCountries?.length < countries?.length)
        }
        loader={<Preloader />}
        className="countries"
        style={{overflow: "hidden"}}
      >
        {error && <p>An error occured</p>}
        {!isLoading && data && [slicedCountries]}
      </InfiniteScroll>
    </div>
  )
}
