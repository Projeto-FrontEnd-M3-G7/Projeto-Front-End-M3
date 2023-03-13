import { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { StyledCartProductCard } from "./styles";
import { iProduct } from "../../../../../providers/ProductContext/@types";
import { CartContext } from "../../../../../providers/CartContext/CartContext";

interface iCartProductCard {
  product: iProduct;
}

export const CartProductCard = ({ product }: iCartProductCard) => {
  const [valueInput, setValueInput] = useState(1);
  const { removeToCart } = useContext(CartContext);

  return (
    <StyledCartProductCard>
      <div className="imageBox">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="contentBox">
        <div>
          <p>{product.name}</p>
          {/*           <div>
            <button type="button" onClick={() => setValueInput(valueInput - 1)}>
              -
            </button>
            <input type="text" value={valueInput} />
            <button type="button" onClick={() => setValueInput(valueInput + 1)}>
              +
            </button>
          </div> */}
        </div>
        <FaTrash className="button" onClick={() => removeToCart(product)} />
      </div>
    </StyledCartProductCard>
  );
};
