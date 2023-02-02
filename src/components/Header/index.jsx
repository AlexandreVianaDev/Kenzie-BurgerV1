import React from "react";
import InputSearch from "../InputSearch";
import Logo from "../Logo";
import StyledHeader from "./style.js"

export default function Header({ showProducts, searchInput, setSearchInput }) {
  return (
    <StyledHeader>
      <div className="container">
        <Logo />
        <InputSearch
          showProducts={showProducts}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
    </StyledHeader>
  );
}
