import React from "react";
import Product from "../Product";
import { v4 as uuid } from "uuid";
import StyledProductList from "./style";
import SearchResults from "../SearchResults";

const ProductsList = ({
  products,
  handleClick,
  searchInput,
  setSearchInput,
  searching,
  setSearching,
  showProducts,
  lastInput,
  setLastInput,
}) => {
  return (
    <>
      {searching && (
        <SearchResults
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setSearching={setSearching}
          showProducts={showProducts}
          lastInput={lastInput}
          setLastInput={setLastInput}
        />
      )}
      <StyledProductList>
        {products.length > 0
          ? products.map((product) => {
              return (
                <Product
                  key={uuid()}
                  product={product}
                  handleClick={handleClick}
                ></Product>
              );
            })
          : searchInput && (
              <li className="heading-1 search__warning">
                Não foram encontrados resultados para a busca
              </li>
            )}
      </StyledProductList>
    </>
  );
};

export default ProductsList;
