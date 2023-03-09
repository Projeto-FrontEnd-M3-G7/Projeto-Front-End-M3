import { StyledAside } from "./styles";

export const Categories = () => {
  console.log("TESTE");

  return (
    <StyledAside>
      <h2>Categorias</h2>
      <input type="text" placeholder="buscar categoria" />
      <img src="./src/assets/img/icons8-pesquisar.png" alt="botão de busca" />
      <ul>
        <li>Eletrônicos</li>
        <li>Calçados</li>
        <li>Roupas</li>
        <li>Eletrodomésticos</li>
        <li>Informática</li>
        <li>Eletrônicos</li>
        <li>Calçados</li>
        <li>Roupas</li>
        <li>Eletrodomésticos</li>
        <li>Informática</li>
      </ul>
    </StyledAside>
  );
};
