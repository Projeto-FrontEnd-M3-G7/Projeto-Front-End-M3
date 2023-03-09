<<<<<<< HEAD
import { useContext, useEffect } from "react";
=======
import { useState } from "react";
>>>>>>> 7431aa4deea559e99efef534ea6ab75d47ce4368
import { StyledMain } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Categories } from "../../components/Categories";
import { ProductList } from "../../components/ProductList";
<<<<<<< HEAD
import { ProductContext } from "../../providers/ProductContext/ProductContext";

export const HomePage = () => {
  const { productsShop, categoriesProducts } = useContext(ProductContext);

  useEffect(() => {
    productsShop();
    categoriesProducts();
  }, []);
=======
import { ModalLogin } from "../../components/Modais/ModalLogin";
import { ModalRegister } from "../../components/Modais/ModalRegister";

export const HomePage = () => {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
>>>>>>> 7431aa4deea559e99efef534ea6ab75d47ce4368

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
              <ProductList />
            </div>
          </section>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};
