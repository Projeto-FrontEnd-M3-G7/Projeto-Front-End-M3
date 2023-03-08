import { StyledBoxDiv } from "../styles";
import { Input } from "../../Input";

export const ModalLogin = () => (
  <StyledBoxDiv>
    <dialog>
      <div className="headerModal">
        <h2>Login</h2>
        <span>X</span>
      </div>
      <form className="formModal">
        <p>Preencha os campos para realizar login</p>
        <Input />
        <Input />
        <button type="submit">login</button>
        <span>ou</span>
        <button className="button" type="button">
          cadastre-se
        </button>
      </form>
    </dialog>
  </StyledBoxDiv>
);
