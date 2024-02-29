import { ButtonBack } from "../ButtonBack/ButtonBack"
import countryNotFound from "../../assets/images/country-not-found.png"
import "./styles.css"

export const CountryNotFound = () => {
  return (
    <div className="not-found content">
      <ButtonBack />
      <div className="not-found-info">
        <div className="not-found-img-container">
          <img
            className="not-found-img"
            src={countryNotFound}
            alt="Country not found"
          />
        </div>
        <p className="not-found-text">404 - country not found</p>
      </div>
    </div>
  )
}
