import { CardMyProducts } from '../../components/MyProducts';
import { Header } from '../../components/Header';
import { DivContainer } from './style';

export const Dashboard = () => {
    return (
        <DivContainer>
            <Header />
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
                        <button>Editar</button>
                    </div>
                </section>
                <aside className="myProducts">
                    <h2 className="myProducts__title">
                        Controle de produtos Ofertados
                    </h2>

                    <CardMyProducts />
                </aside>
            </main>
        </DivContainer>
    );
};
