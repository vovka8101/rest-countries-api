import { IoArrowBackOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom";
import "./styles.css"

export const ButtonBack = () => {
  const navigate = useNavigate();

  return (
    <button className="back-btn btn" onClick={() => navigate(-1)}>
      <IoArrowBackOutline />
      Back
    </button>
  )
}
