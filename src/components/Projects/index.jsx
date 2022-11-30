import { forwardRef } from "react";
import { useScrollTo } from "../../providers/scroll";
import { useModal } from "../../providers/modal";
import Button from "../Button";
import Modal from "../Modal";
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectsCards,
  ButtonsContainer,
  TitleContainer,
} from "./style";
import { TbViewportWide } from "react-icons/tb";
import * as Fcbuttons from "react-icons/fc";
import { projectsList } from "../../data/projects";
import { useTranslation } from "react-i18next";

const Projects = forwardRef((props, ref) => {
  const { t } = useTranslation();

  const { modalDb, setModalDb, handleProjectsModal, modalProjects } =
    useModal();
  const { projectsCarouselRef, scroll } = useScrollTo();

  const sentToModal = (id) => {
    const modalData = projectsList.find((item) => item.id === id);
    const newData = [...modalDb, modalData];
    setModalDb(newData);
    handleProjectsModal();
  };

  return (
    <ProjectsSection ref={ref}>
      {modalProjects && <Modal type="projects" />}
      <TitleContainer>
        <h2>{t("projects.title")}</h2>{" "}
        <p>({projectsList ? projectsList.length : null})</p>
      </TitleContainer>
      <ProjectsContainer ref={projectsCarouselRef}>
        {projectsList
          ? projectsList.map((item) => (
              <ProjectsCards key={item.id}>
                <h3>{item.name}</h3>
                <img src={item.img} alt={item.name} />
                <Button onClick={() => sentToModal(item.id)}>
                  <TbViewportWide />
                </Button>
              </ProjectsCards>
            ))
          : null}
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
