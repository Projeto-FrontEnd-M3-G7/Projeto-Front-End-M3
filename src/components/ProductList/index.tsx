import { useContext } from "react";
import { StyledUl } from "./styles";
import { ProductCard } from "./ProductCard";
import { ProductContext } from "../../providers/ProductContext/ProductContext";

export const ProductList = () => {
  const { searchProducts, loading } = useContext(ProductContext);

  return (
    <StyledUl>
      {loading ? (
        <div className="boxLoading">
          <img src="./src/assets/img/Spinner-1s-200px.svg" alt="Loading..." />
        </div>
      ) : (
        searchProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </StyledUl>
  );
};
