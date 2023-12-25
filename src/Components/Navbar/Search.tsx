const Search = () => {
  return (
    <div className="join">
      <div>
        <div>
          <input
            className="input input-bordered join-item"
            placeholder="Search"
          />
        </div>
      </div>
      <select className="select select-bordered join-item">
        <option disabled selected>
          Filter
        </option>
        <option>#Productivity</option>
        <option>#Javascript</option>
        <option>#Devtools</option>
      </select>
    </div>
  );
};

export default Search;
