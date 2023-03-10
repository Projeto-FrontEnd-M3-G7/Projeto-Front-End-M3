import { MyCardContainer } from "./style";

export const MyProdutsCard = () => {
  console.log();
  return (
    <MyCardContainer>
      <button className="infoProducts">
        <h3>Nome do produto</h3>
        <p>Descrição do produto</p>
        <p>Preço</p>
      </button>
    </MyCardContainer>
  );
};
