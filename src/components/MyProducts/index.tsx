import { MyProdutsCard } from '../MyProductsCard';
import { CardContainer } from './style';

export const CardMyProducts = () => {
    return (
        <CardContainer>
            <MyProdutsCard />
            <MyProdutsCard />
            <MyProdutsCard />
            <MyProdutsCard />
            <MyProdutsCard />
        </CardContainer>
    );
};
