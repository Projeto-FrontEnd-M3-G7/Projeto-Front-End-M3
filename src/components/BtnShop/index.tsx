import { StyledBtnShop } from "./styles";

interface iBtnShop {
  text: string;
}

export const BtnShop = ({ text }: iBtnShop) => (
  <StyledBtnShop type="button">{text}</StyledBtnShop>
);
