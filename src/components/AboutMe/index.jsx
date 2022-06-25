import { forwardRef } from "react";
import userImg from "../../assets/img/perfil.png";
import { AboutMeSection, ProfileImgBox, ProfileDescBox } from "./style";

const AboutMe = forwardRef((props, ref) => {
  return (
    <AboutMeSection ref={ref}>
      <ProfileImgBox>
        <img src={userImg} alt="" />
      </ProfileImgBox>
      <ProfileDescBox>
        <h2>SOBRE MIM</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum
          distinctio eius et non culpa, vitae quaerat consectetur dolore
          temporibus sapiente quae hic iure, fugit harum laudantium magnam quia
          ipsum!
        </p>
      </ProfileDescBox>
    </AboutMeSection>
  );
});
export default AboutMe;
