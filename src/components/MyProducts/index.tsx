import { useContext, useEffect } from 'react';
import { CardContainer } from './style';
import { ProductContext } from '../../providers/ProductContext/ProductContext';
import { UserContext } from '../../providers/UserContext/UserContext';
import { MyProdutsCard } from '../MyProductsCard';
import { useNavigate } from 'react-router-dom';

export const CardMyProducts = () => {
    const navigate = useNavigate();
    const { productsUser, userProducts } = useContext(ProductContext);
    const { user } = useContext(UserContext);

    const adminPage = () => {
        navigate('/admin-page');
    };

    useEffect(() => {
        productsUser();
    }, []);

    return (
        <CardContainer
            type="button"
            className="infoProducts"
            onClick={() => {
                adminPage();
            }}
        >
            <ul className="cardProducts">
                {userProducts?.length < 1 || !user ? (
                    <h1 className="empty">Você ainda não tem produtos</h1>
                ) : (
                    userProducts?.map((product) => (
                        <MyProdutsCard key={product.id} product={product} />
                    ))
                )}
            </ul>
        </CardContainer>
    );
};
