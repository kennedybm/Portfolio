import quadroImg from "../assets/img/quadrodemedalhas.png";
import loadingImg from "../assets/img/carregando.png";
import quackImg from "../assets/img/quackritics.png";

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
      "Quackritics é uma aplicação desenvolvida pensando nos amantes do cinema, onde os usuários podem se cadastras, avaliar e fazer reviews dos seus filmes e séries favoritos, além de editar o próprio perfil. Projeto de conclusão do modúlo de React na Kenzie Academy Brasil",
    techs: ["HTML", "CSS", "Javascript", "React"],
    git: "https://github.com/kennedybm/quack-ritics",
    view: "https://project-quackritics.vercel.app/",
  },
  {
    id: 3,
    name: "Em breve",
    img: loadingImg,
  },
  {
    id: 4,
    name: "Em breve",
    img: loadingImg,
  },
  {
    id: 5,
    name: "Em breve",
    img: loadingImg,
  },
];
