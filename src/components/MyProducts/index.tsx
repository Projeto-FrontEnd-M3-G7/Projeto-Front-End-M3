import { useContext, useEffect } from "react";
import { CardContainer } from "./style";
import { MyProdutsCard } from "../MyProductsCard";
import { ProductContext } from "../../providers/ProductContext/ProductContext";

export const CardMyProducts = () => {
  const { productsUser, userProducts } = useContext(ProductContext);

  useEffect(() => {
    productsUser();
  }, []);

  return (
    <CardContainer>
      {userProducts?.map((product) => (
        <MyProdutsCard key={product.id} product={product} />
      ))}
    </CardContainer>
  );
};
