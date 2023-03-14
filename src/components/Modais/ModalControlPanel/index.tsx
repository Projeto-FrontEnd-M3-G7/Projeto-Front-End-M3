import { useContext } from "react";
import { StyledCarDiv } from "./styles";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { iProduct } from "../../../providers/ProductContext/@types";

interface iPropControlPanel {
  productSelect: iProduct;
}

export const ModalControlPanel = ({ productSelect }: iPropControlPanel) => {
  const { setIsOpenModalControlPanel } = useContext(UserContext);

  const totalAdquirido = productSelect.acquiredValue * productSelect.quantity;
  const lucroTotal = productSelect.saleValue - productSelect.acquiredValue;

  return (
    <StyledCarDiv>
      <dialog>
        <div className="headerModal">
          <h3>Painel de Controle</h3>
          <button
            type="button"
            className="span"
            onClick={() => setIsOpenModalControlPanel(false)}
          >
            X
          </button>
        </div>
        <div className="boxContentProduct">
          <h2>{productSelect.name}</h2>
          <p>Vendas Finalizadas: 10 unidades</p>
          <div className="control">
            <p>Controle Estatístico:</p>
            <ul>
              <li>
                <span>Aquisição</span>
                <p>
                  Valor unidade: R$ {productSelect.acquiredValue.toFixed(2)}
                </p>
                <p>Total adquirido: R$ {totalAdquirido.toFixed(2)}</p>
                <span>adquirido: {productSelect.quantity} unid.</span>
              </li>
              <li>
                <span>Ofertado</span>
                <p>valor unidade: R$ {productSelect.saleValue.toFixed(2)}</p>
                <span>ofertados: {productSelect.quantity} unid.</span>
              </li>
              <li>
                <span>Lucro Total</span>
                <p>p/ unidade: R$ {lucroTotal.toFixed(2)}</p>
                <p>
                  total vendas: R$ {(productSelect.saleValue * 10).toFixed(2)}
                </p>
                <span>vendidos: 10 unid.</span>
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={() => setIsOpenModalControlPanel(false)}
          className="cancelar"
          type="button"
        >
          Fechar
        </button>
      </dialog>
    </StyledCarDiv>
  );
};
