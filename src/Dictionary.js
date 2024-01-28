import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imagesApiKey = "e2c0b68bt1bfbc04o7da0f6ea7720334";
    let imagesApi = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApi).then(handleImagesResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
  }

  function handleImagesResponse(response) {
    setPhotos(response.data.photos);
  }

  return (
    <div className="Dictionary">
      <div className="search-engine-container">
        <h1>What word would you like to search?</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for ..."
            required
            onChange={updateKeyword}
          />
          <p>e.g: beach, sunset, cat</p>
        </form>
      </div>
      <Results result={result} photos={photos} />
    </div>
  );
}
