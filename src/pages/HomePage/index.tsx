import { useContext, useEffect, useState } from "react";
import { StyledMain } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Categories } from "../../components/Categories";
import { ProductList } from "../../components/ProductList";
import { ModalLogin } from "../../components/Modais/ModalLogin";
import { ModalRegister } from "../../components/Modais/ModalRegister";
import { ProductContext } from "../../providers/ProductContext/ProductContext";

export const HomePage = () => {
  const { productsShop, categoriesProducts } = useContext(ProductContext);
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);

  useEffect(() => {
    productsShop();
    categoriesProducts();
  }, []);

  return (
    <>
      {isOpenModalLogin && (
        <ModalLogin
          setIsOpenModalLogin={setIsOpenModalLogin}
          setIsOpenModalRegister={setIsOpenModalRegister}
        />
      )}
      {isOpenModalRegister && (
        <ModalRegister
          setIsOpenModalLogin={setIsOpenModalLogin}
          setIsOpenModalRegister={setIsOpenModalRegister}
        />
      )}
      <Header
        labelBtn1="Login"
        labelBtn2="Cadastrar"
        setIsOpenModalLogin={setIsOpenModalLogin}
        setIsOpenModalRegister={setIsOpenModalRegister}
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
              <ProductList setIsOpenModalLogin={setIsOpenModalLogin} />
            </div>
          </section>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};
