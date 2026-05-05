function SearchBar({ searchTerm, onSearchTermChange }) {
  return (
    <div>
        <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
        />  
    </div> 
    );
}

export default SearchBar