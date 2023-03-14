import { useContext, useEffect, useState } from "react";
import { StyledAdminPage } from "./styles";
import { HeaderAdmin } from "../../components/Header/HeaderAdmin";
import { UserContext } from "../../providers/UserContext/UserContext";
import { ModalControlPanel } from "../../components/Modais/ModalControlPanel";
import { ModalExcluirProduct } from "../../components/Modais/ModalExcluirProduct";
import { ModalCreateProduct } from "../../components/Modais/ModalCreateProduct";
import { iUserContext } from "../../providers/UserContext/@types";
import { ModalUpdateProduct } from "../../components/Modais/ModalUpdateProduct";
import { ProductContext } from "../../providers/ProductContext/ProductContext";
import { iProduct } from "../../providers/ProductContext/@types";

export const AdminPage = () => {
  const {
    isOpenModalControlPanel,
    setIsOpenModalControlPanel,
    isOpenModalDeleteProduct,
    setIsOpenModalDeleteProduct,
    isOpenModalEditProduct,
    setIsOpenModalEditProduct,
    isOpenModalCreateProduct,
    setIsOpenModalCreateProduct,
  }: iUserContext = useContext(UserContext);

  const { productsUser, userProducts } = useContext(ProductContext);
  const [productSelect, setProductSelect] = useState<iProduct[] | []>();

  useEffect(() => {
    productsUser();
  }, []);

  return (
    <StyledAdminPage>
      {isOpenModalCreateProduct && <ModalCreateProduct />}
      {isOpenModalEditProduct && <ModalUpdateProduct />}
      {isOpenModalDeleteProduct && (
        <ModalExcluirProduct productSelect={productSelect} />
      )}
      {isOpenModalControlPanel && (
        <ModalControlPanel productSelect={productSelect} />
      )}
      <HeaderAdmin />
      <div className="adminMain">
        <div className="options">
          <h1>Produtos</h1>
          <select name="Categories" id="Categories">
            <option value="">Categorias</option>
            {userProducts?.map((product, index) => (
              <option key={product.id} value={index}>
                {product.category}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => setIsOpenModalCreateProduct(true)}
          >
            + Criar
          </button>
        </div>
        <ul>
          {userProducts?.map((product) => (
            <li key={product.id}>
              <div className="products-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-realPrice">
                  Valor Bruto: R$ {product.acquiredValue.toFixed(2)}
                </p>
                <p className="product-price">
                  Valor ofertado: R$ {product.saleValue.toFixed(2)}
                </p>
                <div className="product-bottom">
                  <p className="product-quantity">
                    Quantidade em estoque:{" "}
                    <strong>{product.quanty} unidades</strong>
                  </p>
                  <p className="product-id">id Produto: {product.id}</p>
                </div>
              </div>
              <aside>
                <button
                  className="btn-edit"
                  onClick={() => setIsOpenModalEditProduct(true)}
                  type="button"
                >
                  <img
                    src="src/assets/img/icons8-edit.png"
                    alt="icon-edit.png"
                  />
                </button>
                <button
                  onClick={() => {
                    setIsOpenModalControlPanel(true);
                    setProductSelect(product);
                  }}
                  className="btn-controlPanel"
                  type="button"
                >
                  <img
                    src="src/assets/img/icons8-gráfico-combinado-50.png"
                    alt="icon-view.png"
                  />
                </button>
                <button
                  type="button"
                  className="btn-delete"
                  onClick={() => {
                    setIsOpenModalDeleteProduct(true);
                    setProductSelect(product);
                  }}
                >
                  <img
                    src="src/assets/img/icons8-excluir-lixeira.png"
                    alt="icon-delete.png"
                  />
                </button>
              </aside>
            </li>
          ))}
        </ul>
      </div>
    </StyledAdminPage>
  );
};
