import { useContext } from "react";
import { CartProductList } from "./CardProductList";
import { StyledCarDiv } from "./styles";
import { CartContext } from "../../../providers/CartContext/CartContext";

export const ModalCart = () => {
  const { cartProductsList, setModalCartIsOpen } = useContext(CartContext);

  return (
    <StyledCarDiv>
      <dialog>
        <header className="headerModal">
          <h3>Carrinho de compras</h3>
          <button type="button" onClick={() => setModalCartIsOpen(false)}>
            <span>x</span>
          </button>
        </header>
        <div className="cartBox">
          {cartProductsList.length > 0 ? (
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
