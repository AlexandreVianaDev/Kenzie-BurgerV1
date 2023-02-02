import React from "react";
import StyledProduct from "./style";


export default function Product({ product, handleClick }) {
  const { name, category, price, img, id } = product;

  return (
    <StyledProduct>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div>
        <h3 className="heading-3">{name}</h3>
        <span className="caption">{category}</span>
        <span className="price">
          {price?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          onClick={() => {
            handleClick(id);
          }}
          className="button-green button-medium">
          Adicionar
        </button>
      </div>
    </StyledProduct>
  );
}
