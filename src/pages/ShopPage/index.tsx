import { useContext } from "react";
import { StyledMain } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Categories } from "../../components/Categories";
import { ProductList } from "../../components/ProductList";
import { ModalCart } from "../../components/Modais/ModalCart";
import { CartContext } from "../../providers/CartContext/CartContext";
import { ProductContext } from "../../providers/ProductContext/ProductContext";
import { ModalSaibaMais } from "../../components/Modais/ModalSaibaMais";

export const ShopPage = () => {
  const showButtons = true;
  const { modalCartIsOpen } = useContext(CartContext);
  const { openModalSaibaMais } = useContext(ProductContext);

  return (
    <>
      {openModalSaibaMais && <ModalSaibaMais />}
      {modalCartIsOpen && <ModalCart />}
      <Header
        showButtons={showButtons}
        showLoginAndRegister={false}
        labelBtn1=""
        labelBtn2=""
      />
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
              <ProductList showButtons={showButtons} />
            </div>
          </section>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};
