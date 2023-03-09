import { StyledBoxDiv } from "../styles";
import { Input } from "../../Input";
import { Select } from "../../Select/styles";

export const ModalEditProfile = () => (
  <StyledBoxDiv>
    <dialog>
      <div className="headerModal">
        <h2>Editar Perfil</h2>
        <span>X</span>
      </div>
      <form className="formModal">
        <Input />
        <Input />
        <Input />
        <Select>
          <option value="true">Deseja me tornar um vendedor</option>
          <option value="false">Deseja ser consumidor</option>
        </Select>
        <button type="submit">Editar perfil</button>
      </form>
    </dialog>
  </StyledBoxDiv>
);
