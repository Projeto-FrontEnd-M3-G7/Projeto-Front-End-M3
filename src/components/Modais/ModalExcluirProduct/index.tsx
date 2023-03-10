import { useContext } from "react";
import { StyledCarDiv } from "./styles";
import { UserContext } from "../../../providers/UserContext/UserContext";

export const ModalExcluirProduct = () => {
  const { setIsOpenModalDeleteProduct } = useContext(UserContext);
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
          <p>Monitor para PC Full HD Samsung LED Curvo 27” - C27F390F</p>
        </div>
        <div className="boxButtons">
          <button className="deletar" type="button">
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
