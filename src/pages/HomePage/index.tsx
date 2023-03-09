import { StyledMain } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Categories } from "../../components/Categories";
import { ProductList } from "../../components/ProductList";

export const HomePage = () => {
  console.log("deletar depois");

  return (
    <>
      <Header labelBtn1="Login" labelBtn2="Cadastrar" />
      <StyledMain>
        <div className="boxMain">
          <div className="containerCategories">
            <Categories />
          </div>
          <section>
            <div className="boxTitle">
              <h2>Ofertas em Destaques</h2>
            </div>
            <div className="boxVitrine">
              <ProductList />
            </div>
          </section>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};
