import React from "react";

export default function Product({ product, handleClick }) {
  const { name, category, price, img, id } = product;

  return (
    <li>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div>
        <h2>{name}</h2>
        <span>{category}</span>
        <span>
          {price?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          onClick={() => {
            handleClick(id);
          }}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
}
