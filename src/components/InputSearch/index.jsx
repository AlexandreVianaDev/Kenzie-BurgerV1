import React from "react";
import StyledForm from "./style";

const InputSearch = ({
  showProducts,
  searchInput,
  setSearchInput,
  setSearching,
  setFilteredProducts,
  lastInput,
  setLastInput,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchInput.length > 0) {
      showProducts(searchInput);
      setLastInput(searchInput);
      setSearching(true);
    }
  };

  return (
    <StyledForm onSubmit={(event) => handleSubmit(event)}>
      <div>
        <input
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          placeholder="Digitar pesquisa"
        />
        <button type="submit" className="button-green button-medium">
          Pesquisar
        </button>
      </div>
    </StyledForm>
  );
};

export default InputSearch;
