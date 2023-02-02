import React, { useEffect } from "react";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import { v4 as uuid } from "uuid";
import StyledCart from "./style";

const Cart = ({
  currentSale,
  setCurrentSale,
  handleQuantitiyIncrease,
  handleQuantitiyDecrease,
  cartTotal,
  setCartTotal,
}) => {
  return (
    <StyledCart>
      <h2 className="heading-3">Carrinho de compras</h2>
      {currentSale.length > 0 ? (
        <>
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
      ) : (
        <div className="cart--empty">
          <h3 className="heading-3">Sua sacola está vazia</h3>
          <span>Adicione itens</span>
        </div>
      )}
    </StyledCart>
  );
};

export default Cart;
