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
  CloseModalBox,
  TitleBox,
  TitleButtonBox,
  LinksGitBox,
  LinksVisitBox,
} from "./style";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as TBicons from "react-icons/tb";

const Modal = ({ type }) => {
  const {
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
          {modalDb
            ? modalDb.map((item) => (
                <ModalCertificates>
                  <img
                    onClick={() => clearCertificatesModal()}
                    src={item.img}
                    alt=""
                  />
                  <CloseModalBox>
                    <Button
                      type="nohover"
                      colorSchema={"--black"}
                      onClick={() => clearCertificatesModal()}
                    >
                      <BiIcons.BiZoomOut />
                    </Button>
                  </CloseModalBox>
                </ModalCertificates>
              ))
            : null}
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
                  <TitleBox>
                    <h3>{item.name}</h3>
                  </TitleBox>
                  <TitleButtonBox>
                    <Button onClick={() => clearProjectModal()} type="nohover">
                      <MdOutlineCloseFullscreen />
                    </Button>
                  </TitleButtonBox>
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
                  <LinksGitBox>
                    <a
                      href={item.git}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Repositório
                      <AiFillGithub />
                    </a>
                  </LinksGitBox>
                  <LinksVisitBox>
                    <a
                      href={item.view}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Visitar
                      <TBicons.TbWorld />
                    </a>
                  </LinksVisitBox>
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
