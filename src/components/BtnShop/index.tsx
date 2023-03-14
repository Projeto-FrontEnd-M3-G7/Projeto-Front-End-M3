import { useContext } from "react";
import { StyledBtnShop } from "./styles";
import { iProduct } from "../../providers/ProductContext/@types";
import { CartContext } from "../../providers/CartContext/CartContext";
import { ProductContext } from "../../providers/ProductContext/ProductContext";

interface iBtnShop {
  text: string;
  product: iProduct;
}

export const BtnShop = ({ text, product }: iBtnShop) => {
  const { addToCart } = useContext(CartContext);
  const { setOpenModalSaibaMais, setSelectedProduct } =
    useContext(ProductContext);

  const handleOnClick = () => {
    if (text === "+ Saiba mais") {
      setOpenModalSaibaMais(true);
      setSelectedProduct(product);
    } else if (text === "Adicionar") {
      addToCart(product);
    }
  };

  return (
    <StyledBtnShop type="button" onClick={handleOnClick}>
      {text}
    </StyledBtnShop>
  );
};
