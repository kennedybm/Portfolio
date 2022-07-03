import { forwardRef } from "react";
import { FooterSection, SocialContainer, DescriptionContainer } from "./style";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = forwardRef((props, ref) => {
  return (
    <FooterSection ref={ref}>
      <SocialContainer>
        <a
          href="https://www.linkedin.com/in/kennedy-barreto-09870723a/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/kennedybm"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsGithub />
        </a>
      </SocialContainer>
      <DescriptionContainer>
        <p>Criado por Kennedy Barreto - 2022</p>
        <span>
          Todos direitos reservados <AiOutlineCopyrightCircle />
        </span>
      </DescriptionContainer>
    </FooterSection>
  );
});
export default Footer;
