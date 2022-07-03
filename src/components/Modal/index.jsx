import { useModal } from "../../providers/modal";
import Button from "../Button";
import {
  ModalCertificates,
  ModalProjects,
  TitleContainer,
  LogoDescContainer,
  LogoBox,
  DescBox,
  LinksContainer,
} from "./style";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { MdPageview } from "react-icons/md";

const Modal = ({ type }) => {
  const {
    modalCertificates,
    handleCertificatesModal,
    modalDb,
    setModalDb,
    modalProjects,
    handleProjectsModal,
  } = useModal();

  const clearCertificatesModal = () => {
    setModalDb("");
    handleCertificatesModal();
  };

  const clearProjectModal = () => {
    setModalDb("");
    handleProjectsModal();
  };

  switch (type) {
    case "certificates":
      return (
        <>
          {modalCertificates &&
            modalDb &&
            modalDb.map((item) => (
              <ModalCertificates>
                <img
                  onClick={() => clearCertificatesModal()}
                  src={item.img}
                  alt=""
                />
              </ModalCertificates>
            ))[0]}
        </>
      );
    case "projects":
      return (
        <>
          {modalProjects &&
            modalDb &&
            modalDb.map((item) => (
              <ModalProjects>
                <TitleContainer>
                  <h2>{item.name}</h2>
                  <Button onClick={() => clearProjectModal()} type="nohover">
                    <MdOutlineCloseFullscreen />
                  </Button>
                </TitleContainer>
                <LogoDescContainer onClick={() => clearProjectModal()}>
                  <LogoBox>
                    <img src={item.img} alt={item.name} />
                  </LogoBox>
                  <DescBox>
                    <p>{item.description}</p>
                  </DescBox>
                </LogoDescContainer>
                <LinksContainer>
                  <a href={item.git} target="_blank" rel="noreferrer noopener">
                    Repositório
                    <AiFillGithub />
                  </a>
                  <div>
                    <a
                      href={item.view}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>Visitar</span>
                      <MdPageview />
                    </a>
                  </div>
                </LinksContainer>
              </ModalProjects>
            ))[0]}
        </>
      );
    default:
      return null;
  }
};
export default Modal;
