import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function dictionarySearch(event) {
    event.preventDefault();

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={dictionarySearch}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Start your search here..."
          onChange={updateKeyword}
          className="search-bar shadow-sm"
        />
        <input type="submit" value="🔍" className="search-icon" />
      </form>
      <Results results={results} />
    </div>
  );
}
