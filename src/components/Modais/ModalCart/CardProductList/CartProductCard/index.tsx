import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { StyledCartProductCard } from "./styles";

export const CartProductCard = () => {
  const [valueInput, setValueInput] = useState(1);

  return (
    <StyledCartProductCard>
      <div className="imageBox">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.iqLnf2ymTtcxxhXTo_sM_AHaJG&pid=Api&P=0"
          alt="nome"
        />
      </div>
      <div className="contentBox">
        <div>
          <p>Nome do Produto</p>
          <div>
            <button type="button" onClick={() => setValueInput(valueInput - 1)}>
              -
            </button>
            <input type="text" value={valueInput} />
            <button type="button" onClick={() => setValueInput(valueInput + 1)}>
              +
            </button>
          </div>
        </div>
        <FaTrash className="button" />
      </div>
    </StyledCartProductCard>
  );
};
