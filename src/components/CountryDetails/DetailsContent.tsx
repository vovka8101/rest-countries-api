import { Interweave } from "interweave"
import { TCountry } from "../../types/types"
import "./styles.css"
import { getNativeNames, getCurrencies, getLanguages } from "../../utils/utils"
import { Link } from "react-router-dom"
import { useState } from "react"

type DetailsContentProps = {
  country: TCountry
}

export const DetailsContent = ({ country }: DetailsContentProps) => {
  const [isImgLoading, setIsImgLoading] = useState(true)
  
  return (
    <>
      <div className="details-img-container">
        {isImgLoading && <div className="skeleton"></div>}
        <img
          className="details-flag-img"
          src={country.flags.svg}
          onLoad={() => setIsImgLoading(false)}
          alt={country.flags.alt}
        />
      </div>
      <div className="details-info">
        <h2 className="country-title">{country.name.official}</h2>
        <div className="country-info-container">
          <div className="country-info-main">
            <p className="country-info">
              Native Name: <span className="country-value">
              <Interweave content={getNativeNames(country.name.nativeName)} />
              </span>
            </p>
            <p className="country-info">
              Population: <span className="country-value">{country.population.toLocaleString()}</span>
            </p>
            <p className="country-info">
              Region: <span className="country-value">{country.region}</span>
            </p>
            <p className="country-info">
              Sub Region: <span className="country-value">{country.subregion}</span>
            </p>
            <p className="country-info">
              Capital: <span className="country-value">{country.capital.join(", ")}</span>
            </p>
          </div>
          <div className="country-info-second">
            <p className="country-info">
              Top Level Domain: <span className="country-value">{country.tld.join(", ")}</span>
            </p>
            <p className="country-info">
              Currencies: <span className="country-value">{getCurrencies(country.currencies)}</span>
            </p>
            <p className="country-info">
              Languages: <span className="country-value">{getLanguages(country.languages)}</span>
            </p>
          </div>
        </div>
        <div className="border-countries">
          <p className="country-info">Border Countries:</p>
          <span className="border-value country-value">
            {country.borderNames?.length ? country.borderNames.map(border => (
              <Link
                key={border.cca3}
                to={`/country/${border.cca3}`}
                className="border-btn btn"
              >{border.name.common}</Link>
            )) : "Without land borders"
            }
          </span>
        </div>
      </div>
    </>
  )
}
