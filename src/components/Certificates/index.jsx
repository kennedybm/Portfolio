import { forwardRef } from "react";
import { useScrollTo } from "../../providers/scroll";
import { useModal } from "../../providers/modal";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import Modal from "../Modal";
import * as Fcbuttons from "react-icons/fc";
import {
  CertificatesSection,
  CertificatesContainer,
  CertificatesBox,
  ButtonsContainer,
} from "./style";
import { certificatesList } from "../../data/certificates";

const Certificates = forwardRef((props, ref) => {
  const { t } = useTranslation();

  const { modalDb, setModalDb, handleCertificatesModal, modalCertificates } =
    useModal();
  const { certificatesCarouselRef, scroll } = useScrollTo();

  const sentToModal = (value) => {
    const modalData = certificatesList.find((item) => item.name === value);
    const newData = [...modalDb, modalData];
    setModalDb(newData);
    handleCertificatesModal();
  };

  return (
    <CertificatesSection ref={ref}>
      {modalCertificates && <Modal type="certificates" />}
      <h2>{t("certificates.title")}</h2>
      <CertificatesContainer ref={certificatesCarouselRef}>
        {certificatesList
          ? certificatesList.map((item) => (
              <CertificatesBox
                key={item.name}
                onClick={() => sentToModal(item.name)}
              >
                <img src={item.img} alt="" />
              </CertificatesBox>
            ))
          : null}
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
