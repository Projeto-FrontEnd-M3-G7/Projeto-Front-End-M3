import { Header } from '../../components/Header';
import { ProductCard } from '../../components/ProductList/ProductCard';
import { NotFoundContainer } from './style';

export const NotFound = () => {
    return (
        <NotFoundContainer>
            <Header labelBtn1={'Voltar'} labelBtn2={'Voltar'} />
            <h1> Não Encontrado</h1>
            <ProductCard />
        </NotFoundContainer>
    );
};
