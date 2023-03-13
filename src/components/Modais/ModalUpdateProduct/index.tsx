import { useContext } from "react";
import { StyledCarDiv, StyledTextarea } from "./styles";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { Input } from "../../Input";

export const ModalUpdateProduct = () => {
  const { setIsOpenModalEditProduct } = useContext(UserContext);
  return (
    <StyledCarDiv>
      <dialog>
        <div className="headerModal">
          <h3>Editar Produto</h3>
          <button
            type="button"
            onClick={() => setIsOpenModalEditProduct(false)}
            className="span"
          >
            X
          </button>
        </div>
        <form>
          <Input placeholder="Nome do Produto" />
          <StyledTextarea placeholder="Informações adicionais" />
          <Input placeholder="Imagem do Produto (url)" />
          <Input placeholder="Valor para Venda" />
          <Input placeholder="Necessário informar o id do produto para sua atualização" />
          <div>
            <button className="cancelar" type="submit">
              Atualizar Produto
            </button>
          </div>
        </form>
      </dialog>
    </StyledCarDiv>
  );
};
