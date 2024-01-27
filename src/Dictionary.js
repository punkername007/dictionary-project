import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <div className="search-engine-container">
        <h1>Dictionary</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for ..."
            autoFocus={true}
            required
            onChange={updateKeyword}
          />
        </form>
      </div>
      <Results result={result} />
    </div>
  );
}
