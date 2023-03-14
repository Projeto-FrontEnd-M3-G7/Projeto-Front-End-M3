import { useContext } from "react";
import { StyledCarDiv } from "./styles";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { iProduct } from "../../../providers/ProductContext/@types";
import { ProductContext } from "../../../providers/ProductContext/ProductContext";

interface iPropsExcluir {
  productSelect: iProduct;
}

export const ModalExcluirProduct = ({ productSelect }: iPropsExcluir) => {
  const { setIsOpenModalDeleteProduct } = useContext(UserContext);
  const { removeProduct, deleteProduct } = useContext(ProductContext);

  return (
    <StyledCarDiv>
      <dialog>
        <div className="headerModal">
          <h3>Excluir Produto</h3>
          <button
            onClick={() => setIsOpenModalDeleteProduct(false)}
            type="button"
            className="span"
          >
            X
          </button>
        </div>
        <p>Tem certeza que deseja deletar esse produto?</p>
        <div className="boxContentProduct">
          <p>{productSelect.name}</p>
        </div>
        <div className="boxButtons">
          <button
            className="deletar"
            type="button"
            onClick={() => {
              removeProduct(productSelect.id);
              deleteProduct(productSelect.id);
            }}
          >
            Deletar
          </button>
          <button
            onClick={() => setIsOpenModalDeleteProduct(false)}
            className="cancelar"
            type="button"
          >
            Cancelar
          </button>
        </div>
      </dialog>
    </StyledCarDiv>
  );
};
