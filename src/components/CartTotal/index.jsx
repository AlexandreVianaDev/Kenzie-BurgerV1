import React from "react";
import { useEffect } from "react";
import StyledCartTotal from "./style"

export default function CartTotal({
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
}) {
  const clearCart = () => {
    setCurrentSale([]);
  };

  useEffect(() => {
    setCartTotal(
      currentSale.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity;
      }, 0)
    );
  }, [currentSale]);

  return (
    <StyledCartTotal>
      <div>
        <span className="heading-4">Total:</span>
        <span className="body-600">
          {cartTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <button onClick={clearCart} className="button-grey button-default">Remover todos</button>
    </StyledCartTotal>
  );
}
