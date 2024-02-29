import { useParams } from "react-router-dom"
import { useGetCountryQuery } from "../../services/countriesApi"
import { DetailsContent } from "./DetailsContent"
import { Preloader } from "../Preloader/Preloader"
import { ButtonBack } from "../ButtonBack/ButtonBack"
import { CountryNotFound } from "../404/CountryNotFound"

export const CountryDetails = () => {
  const { code } = useParams<"code">()
  const { data, error, isFetching } = useGetCountryQuery(code ?? "")

  if (!data && !isFetching) {
    return <div>No match</div>
  } else if (error) {
    return <CountryNotFound />
  }

  return (
    <div className="details content">
      <ButtonBack />
      {isFetching && <Preloader />}
      <section className="details-content">
        {!isFetching && data && <DetailsContent country={data} />}
      </section>
    </div>
  )
}
