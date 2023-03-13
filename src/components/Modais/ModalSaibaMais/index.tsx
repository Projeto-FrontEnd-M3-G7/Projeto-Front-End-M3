import { useContext } from "react";
import { StyledModalSaibaMais } from "./styles";
import { ProductContext } from "../../../providers/ProductContext/ProductContext";
import { CartContext } from "../../../providers/CartContext/CartContext";
import { iProduct } from "../../../providers/ProductContext/@types";

export const ModalSaibaMais = () => {
  const { setOpenModalSaibaMais, selectedProduct } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  return (
    <StyledModalSaibaMais>
      <dialog>
        <div className="headerModal">
          <h3>{selectedProduct?.name || ""}</h3>
          <button onClick={() => setOpenModalSaibaMais(false)} type="button">
            X
          </button>
        </div>
        <div className="products-info">
          <p className="product-description">
            {selectedProduct?.description || ""}
          </p>
          <p className="product-price">R$ {selectedProduct?.saleValue || ""}</p>
        </div>
        <div className="div-buttons">
          <button
            type="button"
            className="addToCart"
            onClick={() => {
              addToCart(selectedProduct as iProduct);
              setOpenModalSaibaMais(false);
            }}
          >
            Adicionar ao carrinho
          </button>
          <button
            onClick={() => setOpenModalSaibaMais(false)}
            type="button"
            className="close"
          >
            Fechar
          </button>
        </div>
      </dialog>
    </StyledModalSaibaMais>
  );
};
