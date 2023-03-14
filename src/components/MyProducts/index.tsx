import { CardContainer } from './style';
import { MyProdutsCard } from '../MyProductsCard';
import { useContext, useEffect } from 'react';
import { ProductContext } from '../../providers/ProductContext/ProductContext';
import { UserContext } from '../../providers/UserContext/UserContext';
import { iProduct } from '../../providers/ProductContext/@types';
import { useNavigate } from 'react-router-dom';

interface iCardMyProductsProps {
    userId: number;
    key: number;
    product: iProduct;
}

export const CardMyProducts = () => {
    const navigate = useNavigate();
    const { products, productsShop } = useContext(ProductContext);
    const { user } = useContext(UserContext);

    console.log(products);

    useEffect(() => {
        productsShop();
    }, []);

    const navigateAdminPage = () => {
        navigate('/admin-page');
    };

    return (
        <CardContainer onClick={() => navigateAdminPage()}>
            {products === null || !user
                ? null
                : products!.map((product) => {
                      if (Number(product.userId) === user!.id)
                          return (
                              <MyProdutsCard
                                  key={product.id}
                                  product={product}
                              />
                          );
                      else return <h1>Você ainda não tem produtos</h1>;
                  })}
            ;
        </CardContainer>
    );
};
