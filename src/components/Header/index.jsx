import React from "react";
import InputSearch from "../InputSearch";
import Logo from "../Logo";
import StyledHeader from "./style.js";

const Header = ({
  showProducts,
  searchInput,
  setSearchInput,
  setSearching,
  setFilteredProducts,
  lastInput,
  setLastInput,
}) => {
  return (
    <StyledHeader>
      <div className="container">
        <Logo />
        <InputSearch
          showProducts={showProducts}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setSearching={setSearching}
          setFilteredProducts={setFilteredProducts}
          lastInput={lastInput}
          setLastInput={setLastInput}
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
