import React from "react";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import { v4 as uuid } from "uuid";
import StyledCart from "./style";

export default function Cart({
  currentSale,
  setCurrentSale,
  handleQuantitiyIncrease,
  handleQuantitiyDecrease,
  cartTotal,
  setCartTotal,
}) {
  return (
    <StyledCart>
      <h2 className="heading-3">Carrinho de compras</h2>
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
    </StyledCart>
  );
}
