import React from "react";

export default function CartProduct({
  sale,
  handleQuantitiyIncrease,
  handleQuantitiyDecrease,
  currentSale,
  setCurrentSale,
}) {
  const { name, category, price, img, id, quantity } = sale;

  const removeProduct = (id) => {
    const newCurrentSale = currentSale.filter((sale) => sale.id !== id);
    setCurrentSale(newCurrentSale);
  };

  return (
    <li>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div>
        <h3>{name}</h3>
        <span>{category}</span>
        <span>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div>
        <button
          onClick={() => {
            handleQuantitiyDecrease(id);
          }}
        >
          -
        </button>
        <button>{quantity}</button>
        <button
          onClick={() => {
            handleQuantitiyIncrease(id);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            removeProduct(id);
          }}
        >
          Remover
        </button>
      </div>
    </li>
  );
}
