import { Link } from "react-router-dom"
import { TCountries } from "../../types/types"
import { useState } from "react"

type CountryProps = {
  country: TCountries
}

export const Country = ({ country }: CountryProps) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Link to={`country/${country.cca3}`} className="country">
      <div className="country-flag-container">
        {isLoading && <div className="skeleton"></div>}
        <img
          className="country-flag"
          src={country.flags.svg}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          alt={country.flags.alt}
        />
      </div>
      <div className="country-content">
        <h3 className="country-name">{country.name.common}</h3>
        <p className="country-info">
          Population: <span className="country-value">{country.population.toLocaleString()}</span>
        </p>
        <p className="country-info">
          Region: <span className="country-value">{country.region}</span>
        </p>
        <p className="country-info">
          Capital: <span className="country-value">{country.capital.join(", ")}</span>
        </p>
      </div>
    </Link>
  )
}
