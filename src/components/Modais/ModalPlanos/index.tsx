import { useContext } from "react";
import { StyledBoxPlanos } from "./styles";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { StyledBoxDiv } from "../styles";

export const ModalPlanos = () => {
  const { setIsOpenModalPlanos } = useContext(UserContext);

  return (
    <StyledBoxDiv>
      <dialog>
        <div className="headerModal">
          <h2>Planos Disponíveis!</h2>
          <button type="button" onClick={() => setIsOpenModalPlanos(false)}>
            <span>X</span>
          </button>
        </div>
        <StyledBoxPlanos>
          <span>Plano Free</span>
          <span>Plano Master</span>
          <span>Plano Premium</span>
        </StyledBoxPlanos>
      </dialog>
    </StyledBoxDiv>
  );
};
