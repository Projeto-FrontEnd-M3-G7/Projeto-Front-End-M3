import { StyledBoxDiv } from "../styles";
import { Input } from "../../Input";
import { Select } from "../../Select/styles";

export const ModalRegister = () => (
  <StyledBoxDiv>
    <dialog>
      <div className="headerModal">
        <h2>Cadastre-se</h2>
        <span>X</span>
      </div>
      <form className="formModal">
        <p>Preencha os campos para realizar o cadastro</p>
        <Input />
        <Input />
        <Input />
        <Select>
          <option value="true">Deseja me tornar um vendedor</option>
          <option value="false">Deseja ser consumidor</option>
        </Select>
        <button type="submit">Cadastre-se</button>
        <span>ou</span>
        <button className="button" type="button">
          Retornar
        </button>
      </form>
    </dialog>
  </StyledBoxDiv>
);
