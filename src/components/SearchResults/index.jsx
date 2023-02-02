import React from "react";
import StyledSearchResults from "./style";

const SearchResults = ({
  searchInput,
  setSearchInput,
  setSearching,
  showProducts,
  lastInput,
  setLastInput,
}) => {
  const handleClearSearch = () => {
    setSearchInput("");
    setLastInput("");
    setSearching(false);
    showProducts();
  };

  return (
    <StyledSearchResults>
      <span className="heading-1">
        Resultados para: <span className="text-grey">{lastInput}</span>
      </span>
      {screen.width > 769 ? (
        <button className="button-green" onClick={handleClearSearch}>
          Limpar busca
        </button>
      ) : null}
    </StyledSearchResults>
  );
};

export default SearchResults;
