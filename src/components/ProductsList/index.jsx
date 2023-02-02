import React from "react";
import Product from "../Product";
import { v4 as uuid } from "uuid";
import StyledProductList from "./style";

export default function ProductsList({ products, handleClick }) {
  return (
    <StyledProductList>
      {products.length > 0 ? (
        products.map((product) => {
          return (
            <Product
              key={uuid()}
              product={product}
              handleClick={handleClick}
            ></Product>
          );
        })
      ) : (
        <li>Não foram encontrados resultados para a busca</li>
      )}
    </StyledProductList>
  );
}
