import React from "react";
import StyledCartProduct from "./style"

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
    <StyledCartProduct>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="product__info">
        <div className="product__text">
          <h3 className="heading-3">{name}</h3>
          <span className="caption">{category}</span>
          <span className="price">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <div className="product__control">
          <div>
            <button
              onClick={() => {
                handleQuantitiyDecrease(id);
              }}
            className="button-green">
              -
            </button>
            <span className="heading-4">{quantity}</span>
            <button
              onClick={() => {
                handleQuantitiyIncrease(id);
              }}
              className="button-green">
              +
            </button>
          </div>
          <button
            onClick={() => {
              removeProduct(id);
            }}
          className="caption">
            Remover
          </button>
        </div>
      </div>

    </StyledCartProduct>
  );
}
