import { useContext } from "react";
import { StyledBoxSobre } from "./styles";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { StyledBoxDiv } from "../styles";

export const ModalSobreNos = () => {
  const { setIsOpenModalSobreNos } = useContext(UserContext);

  return (
    <StyledBoxDiv>
      <dialog>
        <div className="headerModal">
          <h2>Projeto Final t15-Alysson</h2>
          <button type="button" onClick={() => setIsOpenModalSobreNos(false)}>
            <span>X</span>
          </button>
        </div>
        <StyledBoxSobre>
          <p>Cleyviton Davi Ferreira Batista</p>
          <p>Fernando Assis Matos</p>
          <p>Marcos Ferreira de Aquino</p>
          <p>Wagner Guilherme Posteraro Neves De Carvalho</p>
        </StyledBoxSobre>
      </dialog>
    </StyledBoxDiv>
  );
};
