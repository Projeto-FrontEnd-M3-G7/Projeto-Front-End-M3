import { useState } from "react";
import { CartProductList } from "./CardProductList";
import { StyledCarDiv } from "./styles";

export const ModalCart = () => {
  const [cartProducts, setCartProducts] = useState([1, 2, 4]);

  return (
    <StyledCarDiv>
      <dialog>
        <header className="headerModal">
          <h3>Carrinho de compras</h3>
          <span>x</span>
        </header>
        <div className="cartBox">
          {cartProducts.length > 0 ? (
            <CartProductList />
          ) : (
            <div className="emptyBox">
              <p>Sua sacola está vazia</p>
              <span>Adicione itens</span>
            </div>
          )}
        </div>
      </dialog>
    </StyledCarDiv>
  );
};
