import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for ..."
          autoFocus={true}
          onChange={updateKeyword}
        />
      </form>
    </div>
  );
}
