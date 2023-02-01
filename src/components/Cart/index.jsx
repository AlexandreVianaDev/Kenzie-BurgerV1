import React from "react";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import { v4 as uuid } from "uuid";

export default function Cart({
  currentSale,
  setCurrentSale,
  handleQuantitiyIncrease,
  handleQuantitiyDecrease,
  cartTotal,
  setCartTotal,
}) {
  return (
    <>
      <h2>Carrinho de compras</h2>
      <ul>
        {currentSale.map((sale) => {
          return (
            <CartProduct
              key={uuid()}
              sale={sale}
              handleQuantitiyIncrease={handleQuantitiyIncrease}
              handleQuantitiyDecrease={handleQuantitiyDecrease}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            ></CartProduct>
          );
        })}
      </ul>
      <CartTotal
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      ></CartTotal>
    </>
  );
}
