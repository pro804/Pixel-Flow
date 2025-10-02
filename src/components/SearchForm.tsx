import React from "react";
import useGlobalContext from "../hooks/useGlobalContext";
import { useState, useEffect } from "react";
const SearchForm = () => {
  const { setSearchTerm, searchTerm } = useGlobalContext();
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = inputValue.trim();
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setInputValue("");
  }, [searchTerm]);

  return (
    <section>
      <h1 className="title">Pixel Flow</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="Enter a search term..."
          value={inputValue}
          onChange={handleInputChange}
          autoComplete="off"
          aria-label="Search for images"
        />
        <button type="submit" className="btn" disabled={!inputValue.trim()}>
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
