import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
  }
  function dictionarySearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={dictionarySearch}>
        <input type="search" placeholder="Search" onChange={updateKeyword} />
      </form>
    </div>
  );
}
