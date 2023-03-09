import { StyledAdminPage } from "./styles";
import { HeaderAdmin } from "../../components/Header/HeaderAdmin";

export const AdminPage = () => (
  <StyledAdminPage>
    <HeaderAdmin />
    <div className="adminMain">
      <div className="options">
        <h1>Produtos</h1>
        <select name="Categories" id="Categories">
          <option value="1">Selecionar por Categoria</option>
        </select>
        <button>+ Criar</button>
      </div>
      <ul>
        <li>
          <div className="products-info">
            <h3 className="product-name">
              Monitor para PC Full HD Samsung LED Curvo 27” - C27F390F
            </h3>
            <p className="product-description">
              Informações do Produto: Os monitores de tela curva da Samsung
              prometem uma experiência completamente imersiva para você
              desfrutar do conforto visual e imagens de altíssima definição. O
              design é pensado para que você se sinta dentro de cada cena, seja
              em vídeos e filmes ou games insanos.É exatamente isso o que você
              vai ganhar com esse monitor curvo de LED de 27 polegadas com
              resolução Full HD e os recursos especiais que vão, com certeza,
              garantir que você não vai mais saber se está dentro ou fora do
              jogo! Tudo vai ficar muito mais real com o C27F390F.
            </p>
            <p className="product-realPrice">Valor Bruto:R$ 200,00</p>
            <p className="product-price">Valor ofertado:R$ 250,00</p>
            <div className="product-bottom">
              <p className="product-quantity">
                Quantidade em estoque : <strong>05 unidades</strong>
              </p>
              <p className="product-id">id Produto: afkkjemfo-3924942lmc</p>
            </div>
          </div>
          <aside>
            <button type="submit">
              <img src="src/assets/img/icons8-edit.png" alt="icon-edit.png" />
            </button>
            <button type="submit">
              <img
                src="src/assets/img/icons8-gráfico-combinado-50.png"
                alt="icon-view.png"
              />
            </button>
            <button type="submit" className="btn-delete">
              <img
                src="src/assets/img/icons8-excluir-lixeira.png"
                alt="icon-delete.png"
              />
            </button>
          </aside>
        </li>
        <li>
          <div className="products-info">
            <h3 className="product-name">
              Monitor para PC Full HD Samsung LED Curvo 27” - C27F390F
            </h3>
            <p className="product-description">
              Informações do Produto: Os monitores de tela curva da Samsung
              prometem uma experiência completamente imersiva para você
              desfrutar do conforto visual e imagens de altíssima definição. O
              design é pensado para que você se sinta dentro de cada cena, seja
              em vídeos e filmes ou games insanos.É exatamente isso o que você
              vai ganhar com esse monitor curvo de LED de 27 polegadas com
              resolução Full HD e os recursos especiais que vão, com certeza,
              garantir que você não vai mais saber se está dentro ou fora do
              jogo! Tudo vai ficar muito mais real com o C27F390F.
            </p>
            <p className="product-realPrice">Valor Bruto:R$ 200,00</p>
            <p className="product-price">Valor ofertado:R$ 250,00</p>
            <div className="product-bottom">
              <p className="product-quantity">
                Quantidade em estoque : <strong>05 unidades</strong>
              </p>
              <p className="product-id">id Produto: afkkjemfo-3924942lmc</p>
            </div>
          </div>
          <aside>
            <button>
              <img src="src/assets/img/icons8-edit.png" alt="icon-edit.png" />
            </button>
            <button>
              <img
                src="src/assets/img/icons8-gráfico-combinado-50.png"
                alt="icon-view.png"
              />
            </button>
            <button className="btn-delete">
              <img
                src="src/assets/img/icons8-excluir-lixeira.png"
                alt="icon-delete.png"
              />
            </button>
          </aside>
        </li>
        <li>
          <div className="products-info">
            <h3 className="product-name">
              Monitor para PC Full HD Samsung LED Curvo 27” - C27F390F
            </h3>
            <p className="product-description">
              Informações do Produto: Os monitores de tela curva da Samsung
              prometem uma experiência completamente imersiva para você
              desfrutar do conforto visual e imagens de altíssima definição. O
              design é pensado para que você se sinta dentro de cada cena, seja
              em vídeos e filmes ou games insanos.É exatamente isso o que você
              vai ganhar com esse monitor curvo de LED de 27 polegadas com
              resolução Full HD e os recursos especiais que vão, com certeza,
              garantir que você não vai mais saber se está dentro ou fora do
              jogo! Tudo vai ficar muito mais real com o C27F390F.
            </p>
            <p className="product-realPrice">Valor Bruto:R$ 200,00</p>
            <p className="product-price">Valor ofertado:R$ 250,00</p>
            <div className="product-bottom">
              <p className="product-quantity">
                Quantidade em estoque : <strong>05 unidades</strong>
              </p>
              <p className="product-id">id Produto: afkkjemfo-3924942lmc</p>
            </div>
          </div>
          <aside>
            <button>
              <img src="src/assets/img/icons8-edit.png" alt="icon-edit.png" />
            </button>
            <button>
              <img
                src="src/assets/img/icons8-gráfico-combinado-50.png"
                alt="icon-view.png"
              />
            </button>
            <button className="btn-delete">
              <img
                src="src/assets/img/icons8-excluir-lixeira.png"
                alt="icon-delete.png"
              />
            </button>
          </aside>
        </li>
        <li>
          <div className="products-info">
            <h3 className="product-name">
              Monitor para PC Full HD Samsung LED Curvo 27” - C27F390F
            </h3>
            <p className="product-description">
              Informações do Produto: Os monitores de tela curva da Samsung
              prometem uma experiência completamente imersiva para você
              desfrutar do conforto visual e imagens de altíssima definição. O
              design é pensado para que você se sinta dentro de cada cena, seja
              em vídeos e filmes ou games insanos.É exatamente isso o que você
              vai ganhar com esse monitor curvo de LED de 27 polegadas com
              resolução Full HD e os recursos especiais que vão, com certeza,
              garantir que você não vai mais saber se está dentro ou fora do
              jogo! Tudo vai ficar muito mais real com o C27F390F.
            </p>
            <p className="product-realPrice">Valor Bruto:R$ 200,00</p>
            <p className="product-price">Valor ofertado:R$ 250,00</p>
            <div className="product-bottom">
              <p className="product-quantity">
                Quantidade em estoque : <strong>05 unidades</strong>
              </p>
              <p className="product-id">id Produto: afkkjemfo-3924942lmc</p>
            </div>
          </div>
          <aside>
            <button>
              <img src="src/assets/img/icons8-edit.png" alt="icon-edit.png" />
            </button>
            <button>
              <img
                src="src/assets/img/icons8-gráfico-combinado-50.png"
                alt="icon-view.png"
              />
            </button>
            <button className="btn-delete">
              <img
                src="src/assets/img/icons8-excluir-lixeira.png"
                alt="icon-delete.png"
              />
            </button>
          </aside>
        </li>
        <li>
          <div className="products-info">
            <h3 className="product-name">
              Monitor para PC Full HD Samsung LED Curvo 27” - C27F390F
            </h3>
            <p className="product-description">
              Informações do Produto: Os monitores de tela curva da Samsung
              prometem uma experiência completamente imersiva para você
              desfrutar do conforto visual e imagens de altíssima definição. O
              design é pensado para que você se sinta dentro de cada cena, seja
              em vídeos e filmes ou games insanos.É exatamente isso o que você
              vai ganhar com esse monitor curvo de LED de 27 polegadas com
              resolução Full HD e os recursos especiais que vão, com certeza,
              garantir que você não vai mais saber se está dentro ou fora do
              jogo! Tudo vai ficar muito mais real com o C27F390F.
            </p>
            <p className="product-realPrice">Valor Bruto:R$ 200,00</p>
            <p className="product-price">Valor ofertado:R$ 250,00</p>
            <div className="product-bottom">
              <p className="product-quantity">
                Quantidade em estoque : <strong>05 unidades</strong>
              </p>
              <p className="product-id">id Produto: afkkjemfo-3924942lmc</p>
            </div>
          </div>
          <aside>
            <button>
              <img src="src/assets/img/icons8-edit.png" alt="icon-edit.png" />
            </button>
            <button>
              <img
                src="src/assets/img/icons8-gráfico-combinado-50.png"
                alt="icon-view.png"
              />
            </button>
            <button className="btn-delete">
              <img
                src="src/assets/img/icons8-excluir-lixeira.png"
                alt="icon-delete.png"
              />
            </button>
          </aside>
        </li>
      </ul>
    </div>
  </StyledAdminPage>
);
