import { forwardRef, useState } from "react";
import { useScrollTo } from "../../providers/scroll";
import { useModal } from "../../providers/modal";
import Button from "../Button";
import Modal from "../Modal";
import * as Fcbuttons from "react-icons/fc";
import {
  CertificatesSection,
  CertificatesContainer,
  FrontCertificateBox,
  ButtonsContainer,
} from "./style";
import frontImg from "../../assets/img/front.png";

const Certificates = forwardRef((props, ref) => {
  const { modalDb, setModalDb, handleCertificatesModal, modalCertificates } =
    useModal();
  const { certificatesCarouselRef, scroll } = useScrollTo();

  const [certificatesData, setCetitificatesData] = useState([
    {
      name: "front",
      img: frontImg,
    },
  ]);

  const sentToModal = (value) => {
    const modalData = certificatesData.find((item) => item.name === value);
    const newData = [...modalDb, modalData];
    setModalDb(newData);
    handleCertificatesModal();
  };

  return (
    <CertificatesSection ref={ref}>
      {modalCertificates && <Modal type="certificates" />}
      <h2>Qualificações</h2>
      <CertificatesContainer ref={certificatesCarouselRef}>
        <FrontCertificateBox onClick={() => sentToModal("front")}>
          <img src={frontImg} alt="" />
        </FrontCertificateBox>
      </CertificatesContainer>
      <ButtonsContainer>
        <Button
          onClick={() => scroll("certificateleft")}
          colorSchema={"--black"}
        >
          <Fcbuttons.FcPrevious />
        </Button>
        <Button
          onClick={() => scroll("certificateright")}
          colorSchema={"--black"}
        >
          <Fcbuttons.FcNext />
        </Button>
      </ButtonsContainer>
    </CertificatesSection>
  );
});
export default Certificates;
