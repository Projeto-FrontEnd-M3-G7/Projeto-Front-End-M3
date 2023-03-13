import { useContext } from "react";
import { StyledBoxFAQ } from "./styles";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { StyledBoxDiv } from "../styles";

export const ModalFAQ = () => {
  const { setIsOpenModalFAQ } = useContext(UserContext);

  return (
    <StyledBoxDiv>
      <dialog>
        <div className="headerModal">
          <h2>FAQ</h2>
          <button type="button" onClick={() => setIsOpenModalFAQ(false)}>
            <span>X</span>
          </button>
        </div>
        <StyledBoxFAQ>
          <h2>Qual o prazo de aprovação do pedido?</h2>
          <h2>Como faço para imprimir o boleto?</h2>
          <h2>Como conseguir a 2° via da nota fiscal do meu pedido?</h2>
          <h2>Qual o prazo de aprovação do pagamento feito com Pix?</h2>
          <h2>Como faço pra pagar com Pix?</h2>
        </StyledBoxFAQ>
      </dialog>
    </StyledBoxDiv>
  );
};
