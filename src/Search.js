import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [keyword, setKeyword] = useState(null);

  function dictionarySearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
