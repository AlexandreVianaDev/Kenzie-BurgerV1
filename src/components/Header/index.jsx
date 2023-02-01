import React from "react";
import InputSearch from "../InputSearch";
import Logo from "../Logo";

export default function Header({ showProducts, searchInput, setSearchInput }) {
  return (
    <header>
      <Logo />
      <InputSearch
        showProducts={showProducts}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </header>
  );
}
