import { CardMyProducts } from '../../components/MyProducts';
import { Header } from '../../components/Header';
import { DivContainer } from './style';

import edit from '../../assets/img/icons8-edit.png';

export const Dashboard = () => {
    return (
        <DivContainer>
            <Header labelBtn1={'Voltar'} labelBtn2={'Sair'} />
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
                        <button>
                            <img src={edit} alt="Editar" />
                        </button>
                    </div>
                </section>
                <section className="myProducts">
                    <h2 className="myProducts__title">
                        Controle de produtos Ofertados
                    </h2>

                    <CardMyProducts />
                </section>
            </main>
        </DivContainer>
    );
};
