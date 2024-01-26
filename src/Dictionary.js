import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    return alert(`Searching ${keyword}`);
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
          placeholder="Search ..."
          onChange={updateKeyword}
        />
      </form>
    </div>
  );
}
