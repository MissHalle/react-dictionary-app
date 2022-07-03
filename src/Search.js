import React, { useState } from "react";
import axios from "axios";
import DictionaryResults from "./DictionaryResults";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word here"
          autoFocus={true}
          onChange={handleKeywordChange}
        />
        <input className="Submit" type="submit" value="Search" />
      </form>
      <DictionaryResults results={results} />
    </div>
  );
}
