import { useContext, useEffect } from 'react';
import { CardContainer } from './style';
import { ProductContext } from '../../providers/ProductContext/ProductContext';
import { UserContext } from '../../providers/UserContext/UserContext';
import { MyProdutsCard } from '../MyProductsCard';

export const CardMyProducts = () => {
    const { productsUser, userProducts } = useContext(ProductContext);
    const { user } = useContext(UserContext);

    useEffect(() => {
        productsUser();
    }, []);

    return (
        <CardContainer>
            {productsUser.length < 1 || !user ? (
                <h1 className="empty">Você ainda não tem produtos</h1>
            ) : (
                userProducts?.map((product) => (
                    <MyProdutsCard key={product.id} product={product} />
                ))
            )}
        </CardContainer>
    );
};
