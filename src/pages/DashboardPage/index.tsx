import { DivContainer } from "./style";
import { CardMyProducts } from "../../components/MyProducts";
import { Header } from "../../components/Header";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

import editImage from "../../assets/img/icons8-edit.png";
import { api } from "../../services/api";

/*
const user = {
    email: 'kenzinho@mail.com',
    password: '$2a$10$btX6ng5Q1Z.iZ7/O7nG8Oe8bqNZnNKajdDGob4nB29VGjcq52Geom',
    name: 'kenzinho',
    age: 38,
    id: 1,
}; */

const produts = [
  {
    name: "Notebook Lenovo Ultrafino ideapad S145 Core I3-8130 3.4Ghz Turbo Memória 4GB HD SSD 120GB + HD de 1T",
    description:
      "Notebook Lenovo Ultrafino ideapad S145 Core I3-8130 3.4Ghz Turbo Memória 4GB HD SSD 120GB + HD de 1TB Windows 10Lenovo ideapad S145: Design sofisticado leve e compacto, possui tela antirreflexo de 15,6 Polegadas para mais conforto visual e definição de imagem. Um notebook perfeito para produtividade e entretenimento com WiFi AC ultrarrápido e teclado numérico. Conta com abertura de tela de 180 graus para mais flexibilidade e facilidade de uso.",
    img: "https://a-static.mlcdn.com.br/90x90/notebook-lenovo-ultrafino-ideapad-s145-core-i3-8130-3-4ghz-turbo-memoria-4gb-hd-ssd-120gb-hd-de-1t/elobrinformatica/12646/2ec13088e19eb6e59e1045215de0fc7c.jpeg",
    acquired_Value: "4000",
    sale_Value: "4559",
    category: "informática",
    userId: 1,
    id: 1,
  },
  {
    name: "Headset over-ear gamer HyperX Cloud Stinger Core HX-HSCSC black",
    description:
      "Este modelo oferece todos os recursos que os jogadores precisam em seu headset: ótima qualidade de som, conforto, praticidade e confiabilidade. O Cloud Stinger Core apresenta práticos controles de áudio no fio e um cabo de extensão para PC com plugues para estéreo e microfone.",
    img: "https://http2.mlstatic.com/D_Q_NP_696228-MLA40782018138_022020-R.webp",
    acquired_Value: "120",
    sale_Value: "149",
    category: "Eletrônicos",
    userId: 1,
    id: 2,
  },
  {
    name: "Monitor 19.5",
    description:
      "Monitores LED HQ da série HQ-LEDSempre em busca de entender a necessidade do consumidor, a HQ Screen oferece a você uma linha de monitores de alta qualidade e excelente desempenho.",
    img: "https://imgs.ponto.com.br/1542975769/1xg.jpg?imwidth=64",
    acquired_Value: "320",
    sale_Value: "384",
    category: "Informática",
    userId: 1,
    id: 3,
  },
  {
    name: "Tablet Samsung Galaxy A7 Lite T225",
    description:
      "Navegue facilmente pelo tablet usando apenas uma mão. Um menu baseado em gestos permite que você volte, veja aplicativos recentes e acesse o menu Início, tudo com um simples deslizar do seu dedo. Com dezenas de funções, o Galaxy Tab A7 Lite coloca a conveniência na palma da sua mão.",
    img: "https://imgs.casasbahia.com.br/55026919/1g.jpg?imwidth=64",
    acquired_Value: "933",
    sale_Value: "1050",
    category: "Informática",
    userId: 1,
    id: 4,
  },
];

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("@Click&Colect:TOKEN");
  useEffect(() => {
    user
      ? (async () => {
          const response = await api.get(`users/${user.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log(response);
        })()
      : null;
  }, []);
  console.log(user);

  return (
    <DivContainer>
      <Header labelBtn1="Voltar" labelBtn2="Sair" />
      <main>
        <section className="user">
          <div className="userInfos">
            <h2>Olá, {user?.name}</h2>
            <div className="userDados">
              <p>E-mail: {user?.email}</p>
              <p>Plano: {user?.age}</p>
              <p>DATA: {user?.id}</p>
            </div>
          </div>

          <div className="editUser">
            <button type="button">
              <img src={editImage} alt="Editar" />
            </button>
          </div>
        </section>
        <section className="myProducts">
          <h2 className="myProducts__title">Controle de produtos Ofertados</h2>

          <CardMyProducts />
        </section>
      </main>
    </DivContainer>
  );
};
