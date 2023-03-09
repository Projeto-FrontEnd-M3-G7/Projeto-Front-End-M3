import { StyledBtnShop } from "./styles";

export const BtnShop = ({ text, event }) => (
  <StyledBtnShop type="button" onClick={event}>
    {text}
  </StyledBtnShop>
);
