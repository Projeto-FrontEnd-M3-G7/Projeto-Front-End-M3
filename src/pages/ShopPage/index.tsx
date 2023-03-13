import { useContext } from 'react';
import { StyledMain } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Categories } from '../../components/Categories';
import { ProductList } from '../../components/ProductList';
import { ModalCart } from '../../components/Modais/ModalCart';
import { CartContext } from '../../providers/CartContext/CartContext';
import { UserContext } from '../../providers/UserContext/UserContext';

export const ShopPage = () => {
    const showButtons = true;
    const { modalCartIsOpen } = useContext(CartContext);

    const { user } = useContext(UserContext);
    console.log(user);

    return (
        <>
            {modalCartIsOpen && <ModalCart />}
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
                            <ProductList showButtons={showButtons} />
                        </div>
                    </section>
                </div>
            </StyledMain>
            <Footer />
        </>
    );
};
