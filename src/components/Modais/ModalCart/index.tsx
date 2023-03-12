import { useContext, useState } from "react";
import { CartProductList } from "./CardProductList";
import { StyledCarDiv } from "./styles";
import { UserContext } from "../../../providers/UserContext/UserContext";

export const ModalCart = () => {
  const [cartProducts, setCartProducts] = useState([1, 2, 4]);
  const { setIsOpenModalCart } = useContext(UserContext);

  return (
    <StyledCarDiv>
      <dialog>
        <header className="headerModal">
          <h3>Carrinho de compras</h3>
          <button
            onClick={() => setIsOpenModalCart(false)}
            type="button"
            className="x"
          >
            x
          </button>
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
