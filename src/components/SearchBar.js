const SearchBar = ({ onSearch }) => (
    <input
      type="text"
      placeholder="Search by Title or Description"
      onChange={(e) => onSearch(e.target.value)}
      className="border rounded-md p-2 w-full md:w-96 text-center"
    />
  );
  
  export default SearchBar;
  