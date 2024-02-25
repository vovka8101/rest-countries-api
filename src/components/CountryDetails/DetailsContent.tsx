import { Interweave } from "interweave"
import { TCountry, TCurrencies, TLanguages, TNativeName } from "../../types/types"
import "./styles.css"
import { Link } from "react-router-dom"

type DetailsContentProps = {
  country: TCountry
}

export const DetailsContent = ({ country }: DetailsContentProps) => {
  const getNativeNames = (nativeNames: TNativeName) => {
    const names: string[] = []

    for (const key in nativeNames) {
      names.push(`${nativeNames[key].common}<sup>${key}</sup>`)
    }

    return names.join(", ")
  }

  const getCurrencies = (currencies: TCurrencies) => {
    const currenciesArr: string[] = []

    for (const key in currencies) {
      currenciesArr.push(currencies[key].name)
    }

    return currenciesArr.join(", ")
  }

  const getLanguages = (languages: TLanguages) => {
    const languagesArr: string[] = []

    for (const key in languages) {
      languagesArr.push(languages[key])
    }

    return languagesArr.join(", ")
  }

  return (
    <>
      <div className="details-img-container">
        <img className="details-flag-img" src={country.flags.svg} alt={country.flags.alt} />
      </div>
      <div className="details-info">
        <h2 className="country-title">{country.name.common}</h2>
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
            {country.borders.map(border => (
              <Link to={`/country/${border}`} className="border-btn btn">{border}</Link>
            ))}
          </span>
        </div>
      </div>
    </>
  )
}
