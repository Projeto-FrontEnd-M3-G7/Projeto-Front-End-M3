import { useContext, useEffect } from "react";
import { StyledMain } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Categories } from "../../components/Categories";
import { ProductList } from "../../components/ProductList";
import { ModalLogin } from "../../components/Modais/ModalLogin";
import { ModalRegister } from "../../components/Modais/ModalRegister";
import { ProductContext } from "../../providers/ProductContext/ProductContext";
import { UserContext } from "../../providers/UserContext/UserContext";
import { ModalFAQ } from "../../components/Modais/ModalFAQ";
import { ModalContact } from "../../components/Modais/ModalContact";
import { ModalPlanos } from "../../components/Modais/ModalPlanos";
import { ModalSobreNos } from "../../components/Modais/ModalSobreNos";

export const HomePage = () => {
  const {
    isOpenModalLogin,
    isOpenModalRegister,
    isOpenModalFAQ,
    isOpenModalContact,
    isOpenModalPlanos,
    isOpenModalSobreNos,
  } = useContext(UserContext);

  const { productsShop, categoriesProducts } = useContext(ProductContext);

  useEffect(() => {
    productsShop();
    categoriesProducts();
  }, []);

  return (
    <>
      {isOpenModalLogin && <ModalLogin />}
      {isOpenModalRegister && <ModalRegister />}
      {isOpenModalFAQ && <ModalFAQ />}
      {isOpenModalContact && <ModalContact />}
      {isOpenModalPlanos && <ModalPlanos />}
      {isOpenModalSobreNos && <ModalSobreNos />}
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
              <ProductList showButtons={false} />
            </div>
          </section>
        </div>
      </StyledMain>

      <Footer />
    </>
  );
};
