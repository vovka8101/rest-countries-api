import { IoSearchSharp } from "react-icons/io5"
import "./styles.css"

type SearchProps = {
  handleSearch: (value: string) => void
}

export const Search = ({ handleSearch }: SearchProps) => {
  return (
    <section className="search">
      <div className="form-group search-box">
        <IoSearchSharp
          style={{position: "absolute", top: "16px", left: "30px", height: "20px", width: "20px"}}
        />
        <input
          type="search"
          className="search-input"
          onChange={e => handleSearch(e.target.value)}
          placeholder="Search for a country..."
        />
      </div>
      <div className="form-group">
        <select name="filter">
          <option value="" disabled selected hidden>Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </section>
  )
}
