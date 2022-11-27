import { forwardRef } from "react";
import userImg from "../../assets/img/perfil.jpg";
import { useTranslation } from "react-i18next";
import { AboutMeSection, ProfileImgBox, ProfileDescBox } from "./style";

const AboutMe = forwardRef((props, ref) => {
  const { t } = useTranslation();

  return (
    <AboutMeSection ref={ref}>
      <ProfileImgBox>
        <img src={userImg} alt="" />
      </ProfileImgBox>
      <ProfileDescBox>
        <h2>{t("aboutMe.title")}</h2>
        <p>{t("aboutMe.text")}</p>
      </ProfileDescBox>
    </AboutMeSection>
  );
});
export default AboutMe;
