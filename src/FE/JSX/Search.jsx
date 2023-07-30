import React from "react";
import "./CSS/Search.css";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <>
      <div className="search-dropdown">
        <button className="search">
          <BsSearch />
        </button>
        <div className="search-dropdown-menu">Search Content</div>
      </div>
    </>
  );
};

export default Search;
