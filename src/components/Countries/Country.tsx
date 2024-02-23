import { TCountries } from "../../types/types"

type CountryProps = {
  country: TCountries
}

export const Country = ({ country }: CountryProps) => {
  return (
    <div className="country">
      <img className="country-flag" src={country.flags.svg} alt={country.flags.alt} />
      <div className="country-content">
        <h2 className="country-name">{country.name.common}</h2>
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
    </div>
  )
}
