import { StyledMain } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Categories } from "../../components/Categories";

export const HomePage = () => {
  console.log("deletar depois");

  return (
    <>
      <Header />
      <StyledMain>
        <div className="boxMain">
          <Categories />
          <section>
            <div className="boxTitle">
              <h2>Ofertas em Destaques</h2>
            </div>
            <div>
              <h2>Produtos... buscar da API</h2>
            </div>
          </section>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};
