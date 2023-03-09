import { StyledCarDiv, StyledTextarea } from "./styles";
import { Input } from "../../Input";

export const ModalCreateProduct = () => (
  <StyledCarDiv>
    <dialog>
      <div className="headerModal">
        <h3>Painel de Controle</h3>
        <span>X</span>
      </div>
      <form>
        <Input />
        <StyledTextarea placeholder="Descrição do Produto" />
        <Input />
        <Input />
        <Input />
        <div>
          <button className="cancelar" type="submit">
            Criar Produto
          </button>
          <button className="cancelar" type="button">
            Atualizar Produto
          </button>
        </div>
      </form>
    </dialog>
  </StyledCarDiv>
);
