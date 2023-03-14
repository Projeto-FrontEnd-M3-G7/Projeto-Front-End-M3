import { useContext, useEffect } from "react";
import { DivContainer } from "./style";
import { CardMyProducts } from "../../components/MyProducts";
import { Header } from "../../components/Header";

import editImage from "../../assets/img/icons8-edit.png";
import { UserContext } from "../../providers/UserContext/UserContext";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <DivContainer>
      <Header labelBtn1="Voltar" labelBtn2="Sair" />
      <main>
        <section className="user">
          <div className="userInfos">
            <h2>NOME DO USUARIO</h2>
            <div className="userDados">
              <p>E-mail:</p>
              <p>Plano:</p>
              <p>DATA:</p>
            </div>
          </div>

          <div className="editUser">
            <button type="button">
              <img src={editImage} alt="Editar" />
            </button>
          </div>
        </section>
        <section className="myProducts">
          <h2 className="myProducts__title">Controle de produtos Ofertados</h2>
          <CardMyProducts />
        </section>
      </main>
    </DivContainer>
  );
};
