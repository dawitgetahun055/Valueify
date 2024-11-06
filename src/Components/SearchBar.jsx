import Search from "../assets/Search.svg";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <div className="search-content">
        <img src={Search} alt="Search Icon" />
        <div>
          <select name="" id="">
            <option value="">All categories</option>
          </select>
        </div>
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
