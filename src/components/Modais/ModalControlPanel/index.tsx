import { StyledCarDiv } from "./styles";

export const ModalControlPanel = () => (
  <StyledCarDiv>
    <dialog>
      <div className="headerModal">
        <h3>Painel de Controle</h3>
        <span>X</span>
      </div>
      <div className="boxContentProduct">
        <h2>Monitor para PC Full HD Samsung LED Curvo 27” - C27F390F</h2>
        <p>Vendas Finalizadas: 38 unidades</p>
        <div className="control">
          <p>Controle Estatístico:</p>
          <ul>
            <li>
              <span>Aquisição</span>
              <p>Valor unidade: R$ 200,00</p>
              <p>Total adquirido: R$ 10.000,00</p>
              <span>adquirido: 50 unid.</span>
            </li>
            <li>
              <span>Ofertado</span>
              <p>valor unidade: R$ 250,00</p>
              <span>ofertados: 50 unid.</span>
            </li>
            <li>
              <span>Lucro Total</span>
              <p>p/ unidade: R$ 50,00</p>
              <p>total vendas: R$ 9.500,00</p>
              <span>vendidos: 38 unid.</span>
            </li>
          </ul>
        </div>
      </div>
      <button className="cancelar" type="button">
        Fechar
      </button>
    </dialog>
  </StyledCarDiv>
);
