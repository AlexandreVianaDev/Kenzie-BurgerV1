import React from "react";
import StyledForm from "./style";

export default function InputSearch({
  showProducts,
  searchInput,
  setSearchInput,
}) {
  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        showProducts(searchInput);
      }}
    >
      <div>
        <input
          type="text"
          onChange={(event) => setSearchInput(event.target.value)} placeholder="Digitar pesquisa"
        />
        <button type="submit" className="button-green button-medium">Pesquisar</button>
      </div>
    </StyledForm>
  );
}
