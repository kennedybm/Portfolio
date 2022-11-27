import { forwardRef } from "react";
import {
  FooterSection,
  SocialContainer,
  DescriptionContainer,
  GitBox,
  LinkedinBox,
} from "./style";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = forwardRef((props, ref) => {
  return (
    <FooterSection ref={ref}>
      <SocialContainer>
        <LinkedinBox>
          <a
            href="https://www.linkedin.com/in/kennedy-barreto-09870723a/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsLinkedin />
          </a>
        </LinkedinBox>

        <GitBox>
          <a
            href="https://github.com/kennedybm"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsGithub />
          </a>
        </GitBox>
      </SocialContainer>
      <DescriptionContainer>
        <p>
          Copyright <AiOutlineCopyrightCircle /> 2022 Kennedy Barreto
        </p>
      </DescriptionContainer>
    </FooterSection>
  );
});
export default Footer;
