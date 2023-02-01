import React from "react";
import { useEffect } from "react";

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
    <div>
      <div>
        <span>Total:</span>
        <span>
          {cartTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <button onClick={clearCart}>Remover todos</button>
    </div>
  );
}
