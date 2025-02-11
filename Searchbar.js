import React, { useState } from "react";
import { filterResults } from "./utils"; // Funzione di filtro

const SearchBar = ({ items }) => {
  const [query, setQuery] = useState("");
  const [maxResults, setMaxResults] = useState(5);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredResults = filterResults(items, query, maxResults);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Cerca..."
      />
      <ul>
        {Array.isArray(filteredResults) ? (
          filteredResults.length > 0 ? (
            filteredResults.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>Nessun risultato trovato</li>
          )
        ) : (
          <li>{filteredResults}</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
