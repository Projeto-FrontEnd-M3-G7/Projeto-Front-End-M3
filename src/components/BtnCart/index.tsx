import { StyledBtn } from "./styles";

interface iBtnCart {
  event: React.MouseEventHandler<HTMLButtonElement>;
}

export const BtnCart = ({ event }: iBtnCart) => (
  <StyledBtn onClick={event} type="button">
    <img
      src="src/assets/img/icons8-carrinho-de-compras.png"
      alt="Carrinho de compras"
    />
  </StyledBtn>
);
