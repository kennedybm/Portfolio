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
          Entusiasta de tecnologia, ingressando na carreira como desenvolvedor
          Web Full-Stack, acredito que o que me trouxe até aqui, foram as
          possibilidades, tanto de criação de novas features, como, resolução de
          problemas. Apaixonado pela comunidade, sempre disposto a aprimorar e
          aprender novas tecnologias.
        </p>
      </ProfileDescBox>
    </AboutMeSection>
  );
});
export default AboutMe;
