import { useNavigate, useParams } from "react-router-dom"
import { useGetCountryQuery } from "../../services/countriesApi"
import { DetailsContent } from "./DetailsContent"
import { IoArrowBackOutline } from "react-icons/io5"
import { Preloader } from "../Preloader/Preloader"

export const CountryDetails = () => {
  const navigate = useNavigate();
  const { code } = useParams<"code">()
  const { data, error, isLoading } = useGetCountryQuery(code ?? "")

  if (!data && !isLoading) {
    return <div>No match</div>
  }

  return (
    <div className="details content">
      <button className="back-btn btn" onClick={() => navigate(-1)}>
        <IoArrowBackOutline />
        Back
      </button>
      {isLoading && <Preloader />}
      <section className="details-content">
        {error && <p>An error occured</p>}
        {!isLoading && !error && <DetailsContent country={data} />}
      </section>
    </div>
  )
}
