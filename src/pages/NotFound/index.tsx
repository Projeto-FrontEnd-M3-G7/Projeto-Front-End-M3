import { useNavigate } from "react-router-dom";
import { NotFoundContainer } from "./style";
import { Header } from "../../components/Header";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <Header labelBtn1={"Voltar"} labelBtn2={"Voltar"} />
      <button onClick={() => navigate("/")}>Teste</button>
      <h1>Página não encontrada</h1>
    </NotFoundContainer>
  );
};
