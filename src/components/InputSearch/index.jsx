import React from "react";

export default function InputSearch({
  showProducts,
  searchInput,
  setSearchInput,
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        showProducts(searchInput);
      }}
    >
      <input
        type="text"
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
}
