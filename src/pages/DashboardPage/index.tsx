import { useContext } from "react";
import { DivContainer } from "./style";
import { CardMyProducts } from "../../components/MyProducts";
import { Header } from "../../components/Header";
import { UserContext } from '../../providers/UserContext/UserContext';

import editImage from '../../assets/img/icons8-edit.png';
import { ModalEditProfile } from '../../components/Modais/ModalEditProfile';

export const Dashboard = () => {
    const { user, openEdit, setOpenEdit } = useContext(UserContext);

    return (
        <DivContainer>
            <Header labelBtn1="Voltar" labelBtn2="Sair" />
            {openEdit ? <ModalEditProfile /> : null}
            <main>
                <section className="user">
                    <div className="userInfos">
                        <h2>Olá, {user?.name}</h2>
                        <div className="userDados">
                            <p>E-mail: {user?.email}</p>
                            <p>
                                {user?.colaborador
                                    ? 'Colaborador: Sim'
                                    : 'Colaborador: Não'}
                            </p>
                            <p>DATA: {user?.id}</p>
                        </div>
                    </div>

          <div className="editUser">
                        <button
                            onClick={() => setOpenEdit(!openEdit)}
                            type="button"
                        >
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