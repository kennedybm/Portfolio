import { forwardRef, useState } from "react";
import { useScrollTo } from "../../providers/scroll";
import { useModal } from "../../providers/modal";
import Button from "../Button";
import Modal from "../Modal";
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectsCards,
  ButtonsContainer,
} from "./style";
import { TbViewportWide } from "react-icons/tb";
import * as Fcbuttons from "react-icons/fc";
import quadroImg from "../../assets/img/quadrodemedalhas.png";
import carregandoImg from "../../assets/img/carregando.png";

const Projects = forwardRef((props, ref) => {
  const { modalDb, setModalDb, handleProjectsModal, modalProjects } =
    useModal();
  const { projectsCarouselRef, scroll } = useScrollTo();

  const [projectsDb, setProjectsDb] = useState([
    {
      id: 1,
      name: "Quadro de Medalhas",
      img: quadroImg,
      description:
        "Esta aplicação mostra o ranking dos países baseado na quantidade de medalhas, projeto simples deselvolvido com JS vanilla",
      techs: ["HTML", "CSS3", "JavaScript"],
      git: "https://github.com/Kenzie-Academy-Brasil-Developers/quadro-medalhas-kennedybm",
      view: "https://kenzie-academy-brasil-developers.github.io/quadro-medalhas-kennedybm/",
    },
    {
      id: 2,
      name: "Em breve",
      img: carregandoImg,
    },
    {
      id: 3,
      name: "Em breve",
      img: carregandoImg,
    },
  ]);

  const sentToModal = (id) => {
    const modalData = projectsDb.find((item) => item.id === id);
    const newData = [...modalDb, modalData];
    setModalDb(newData);
    handleProjectsModal();
  };

  return (
    <ProjectsSection ref={ref}>
      {modalProjects && <Modal type="projects" />}
      <h2>Projetos</h2>
      <ProjectsContainer ref={projectsCarouselRef}>
        {projectsDb.map((item, index) => (
          <ProjectsCards key={index}>
            <h3>{item.name}</h3>
            <img src={item.img} alt={item.name} />
            <Button onClick={() => sentToModal(item.id)}>
              <TbViewportWide />
            </Button>
          </ProjectsCards>
        ))}
      </ProjectsContainer>

      <ButtonsContainer>
        <Button
          onClick={() => scroll("projectsleft")}
          colorSchema={"--primary"}
        >
          <Fcbuttons.FcPrevious />
        </Button>
        <Button
          onClick={() => scroll("projectsright")}
          colorSchema={"--primary"}
        >
          <Fcbuttons.FcNext />
        </Button>
      </ButtonsContainer>
    </ProjectsSection>
  );
});
export default Projects;
