import loader from "../../assets/preloader.svg"
import "./styles.css"

export const Preloader = () => {
  return (
    <div className="preloader">
      <img className="preloader-icon" src={loader} alt="Loading" />
    </div>
  )
}
