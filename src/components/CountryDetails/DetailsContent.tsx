import { Interweave } from "interweave"
import { TCountry, TNativeName } from "../../types/types"
import "./styles.css"

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

  return (
    <>
      <img className="details-flag-img" src={country.flags.svg} alt={country.flags.alt} />
      <div className="details-info">
        <h2 className="country-name">{country.name.common}</h2>
        <p className="country-info">
          Native Name: <span className="country-value">
          <Interweave content={getNativeNames(country.name.nativeName)} />
          </span>
        </p>
      </div>
    </>
  )
}
