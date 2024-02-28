import { IoSearchSharp } from "react-icons/io5"
import "./styles.css"

type SearchProps = {
  handleSearch: (value: string, type: "input" | "filter") => void
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
          onChange={e => handleSearch(e.target.value, "input")}
          placeholder="Search for a country..."
        />
      </div>
      <div className="form-group">
        <select
          className="select"
          name="filter"
          defaultValue=""
          onChange={e => handleSearch(e.target.value, "filter")}
        >
          <option value="" disabled hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  )
}
