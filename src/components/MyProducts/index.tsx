import { CardContainer } from './style';
import { MyProdutsCard } from '../MyProductsCard';
import { useContext, useEffect } from 'react';
import { ProductContext } from '../../providers/ProductContext/ProductContext';
import { UserContext } from '../../providers/UserContext/UserContext';

interface iCardMyProductsProps {
    userId: number;
}

export const CardMyProducts = () => {
    const { products, productsShop } = useContext(ProductContext);
    const { user } = useContext(UserContext);

    useEffect(() => {
        productsShop();
    }, []);

    return (
        <CardContainer>
            {products === null || !user ? (
                <h1>Você ainda não tem produtos</h1>
            ) : (
                products!.map((product) => {
                    if (Number(product.userId) === user!.id)
                        return (
                            <MyProdutsCard key={product.id} product={product} />
                        );
                })
            )}
            ;
        </CardContainer>
    );
};
