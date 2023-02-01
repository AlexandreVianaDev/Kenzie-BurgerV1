import React from "react";
import Product from "../Product";
import { v4 as uuid } from "uuid";

export default function ProductsList({ products, handleClick }) {
  return (
    <ul>
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
    </ul>
  );
}
