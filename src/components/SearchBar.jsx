const resData = [
  {
    name: "KFC",
  },
];
const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        name="search-input"
        id="search-input"
        placeholder="Search Restaurant"
      />
    </div>
  );
};

export default SearchBar;
