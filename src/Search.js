import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Search.css";

export default function Search() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function dictionarySearch(event) {
    event.preventDefault();

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey = `563492ad6f91700001000001abe3810bed8b444291717b735dc78767`;
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
