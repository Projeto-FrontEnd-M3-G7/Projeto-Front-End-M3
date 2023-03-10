import { StyledMain } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Categories } from "../../components/Categories";
import { ProductList } from "../../components/ProductList";

export const ShopPage = () => (
  <>
    <Header labelBtn1="profile" labelBtn2="logout" />
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
            <ProductList showButtons={true} />
          </div>
        </section>
      </div>
    </StyledMain>
    <Footer />
  </>
);
