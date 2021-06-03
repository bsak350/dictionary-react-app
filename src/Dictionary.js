import React from "react";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <form>
        <input
          type="search"
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
