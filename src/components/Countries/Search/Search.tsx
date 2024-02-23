import "./styles.css"

export const Search = () => {
  return (
    <section className="search">
      <div className="form-group">
        <input type="search" />
      </div>
      <div className="form-group">
        <select name="filter">
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
