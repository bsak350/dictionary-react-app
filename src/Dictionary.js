import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          className="form-control w-100"
          placeholder="Type a word"
          autoFocus="on"
        />
        <input
          type="submit"
          value="Search"
          className="form-control btn-primary w-100"
        />
      </form>
    </div>
  );
}
