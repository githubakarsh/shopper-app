import React from "react";
import "./Autocomplete.css";

const Autocomplete = ({
  searchTerm,
  onSearchTerm,
  suggestions,
  onSelectSearchItem,
  displayList
}) => {

  const searchResultsList = () => {
    if(suggestions.length > 0) {
      return (<ul className="search-list" id="search-list">
      {suggestions.slice(0,10).map((list) => {
        return <li id="menu-item" onClick={(e) => onSelectSearchItem(e, list.id)}key={list.id}>{list.title}</li>
      }) }
    </ul>)
    } 
  }

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        className="search-box"
        placeholder="Search for a product"
        onChange={(e) => onSearchTerm(e.target.value)}
        id="search-box"
      />
      {displayList && searchResultsList()}
    </div>
  );
}

export default Autocomplete;
