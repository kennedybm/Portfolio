import quadroImg from "../assets/img/quadrodemedalhas.png";
import loadingImg from "../assets/img/carregando.png";
import quackImg from "../assets/img/quackritics.png";
import systemImg from "../assets/img/systemHotelDiagrams.png";
import hubImg from "../assets/img/kenzieHub.png";
import gustapaoImg from "../assets/img/diagramsGustapao.png";
import cnabImg from "../assets/img/cnab.png";

export const projectsList = [
  {
    id: 1,
    name: "Quadro de Medalhas",
    img: quadroImg,
    description:
      "Esta aplicação mostra o ranking dos países baseado na quantidade de medalhas, projeto simples deselvolvido com JS vanilla.",
    techs: ["HTML", "CSS3", "JavaScript"],
    git: "https://github.com/Kenzie-Academy-Brasil-Developers/quadro-medalhas-kennedybm",
    view: "https://kenzie-academy-brasil-developers.github.io/quadro-medalhas-kennedybm/",
  },
  {
    id: 2,
    name: "Quackritics",
    img: quackImg,
    description:
      "Quackritics é uma aplicação desenvolvida pensando nos amantes do cinema, onde os usuários podem se cadastras, avaliar e fazer reviews dos seus filmes e séries favoritos, além de editar o próprio perfil. Projeto de conclusão do modúlo de React na Kenzie Academy Brasil.",
    techs: ["HTML", "CSS", "Javascript", "React"],
    git: "https://github.com/kennedybm/quack-ritics",
    view: "https://project-quackritics.vercel.app/",
  },
  {
    id: 3,
    name: "System Hotel",
    img: systemImg,
    description:
      "API desenvoldida para fazer gerenciamento de Hotéis, os usuários podem gerenciar desde, funcionários, clientes, quartos, reservas e serviços, projeto de conclusão do 4° módulo da Kenzie Academy Brasil.",
    techs: ["Javascript", "Typescript", "Node", "Express", "TypeORM"],
    git: "https://github.com/CapstoneM4/System-Hotel",
    view: "https://github.com/CapstoneM4/System-Hotel",
  },
  {
    id: 4,
    name: "Kenzie Hub",
    img: hubImg,
    description:
      "Projeto desenvolvido para auxiliar no gerenciamento de estudos, onde usuários podem se cadastrar, fazer login e adicionar as tecnologias e ferramentas que estiverem estudando, utilizado parar firmar o conceito de prop drilling no React.",
    techs: ["Javascript", "React", "HTML", "CSS"],
    git: "https://github.com/Kenzie-Academy-Brasil-Developers/Kenzie-Hub-Project",
    view: "https://react-entrega-s2-kenzie-hub-kennedybm.vercel.app/",
  },
  {
    id: 5,
    name: "Gustapão API",
    img: gustapaoImg,
    description:
      "Este projeto visa ajudar uma panificadora localizada em Curitiba, Brasil, que possui um excelente atendimento e comidas, porém, não possui um sistema dedicado ao gerenciamento de pedidos, desenvolvido para ser colocado em prática, se adequando a necessidade da panificadora.",
    techs: ["Python", "Django", "Django Rest Framework"],
    git: "https://github.com/Gustapao/Tcm-gustapao",
    view: "https://github.com/Gustapao/Tcm-gustapao",
  },
  {
    id: 6,
    name: "CNAB parser",
    img: cnabImg,
    description:
      "CNAB foi criado pela FEBRABAN com o objetivo de agilizar a remessa e retorno de informações entre os clientes e os bancos. O projeto consiste em parsear arquivo de texto(CNAB) com dados das movimentações financeiras de varias lojas e salvar suas informações(transações financeiras) em uma base de dados.",
    techs: ["Python", "Django", "Django Rest Framework"],
    git: "https://github.com/kennedybm/CNAB-Parser",
    view: "https://github.com/kennedybm/CNAB-Parser",
  },
];
