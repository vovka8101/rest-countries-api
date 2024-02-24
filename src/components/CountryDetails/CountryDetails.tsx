import { useParams } from "react-router-dom"
import { useGetCountryQuery } from "../../services/countriesApi"
import { DetailsContent } from "./DetailsContent"

export const CountryDetails = () => {
  const { name } = useParams<"name">()
  const { data, error, isLoading } = useGetCountryQuery(name ?? "")

  if (!data) {
    return <div>No match</div>
  }

  return (
    <div className="details">
      <button className="back-btn">Back</button>
      <section className="details-content">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>An error occured:</p>
        ) : (
          <DetailsContent country={data[0]} />
        )}
      </section>
    </div>
  )
}
