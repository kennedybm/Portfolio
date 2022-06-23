import { useRef } from "react";
import { motion } from "framer-motion";
import userImg from "../../assets/img/perfil.png";
import htmlImg from "../../assets/img/html5.png";
import cssImg from "../../assets/img/css.png";
import jsImg from "../../assets/img/javascript.png";
import reactImg from "../../assets/img/react.png";
import {
  MainContainer,
  LandingSection,
  AtomContainer,
  HtmlBox,
  CssBox,
  JsBox,
  ReactBox,
  AboutMeSection,
  ProfileImgBox,
  ProfileDescBox,
} from "./style";
import NavigationBar from "../../components/Navigation";
import { css } from "styled-components";

const HomePage = () => {
  const testRef = useRef(null);
  const scroll = () => testRef.current.scrollIntoView();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <MainContainer>
        {/* <NavigationBar /> */}
        <LandingSection>
          <AtomContainer>
            <h1>
              <span>Olá,</span> sou Kennedy
            </h1>
            <p>Web Developer</p>
            <HtmlBox>
              <img src={htmlImg} alt="" />
            </HtmlBox>
            <CssBox>
              <img src={cssImg} alt="" />
            </CssBox>
            <JsBox>
              <img src={jsImg} alt="" />
            </JsBox>
            <ReactBox>
              <img src={reactImg} alt="" />
            </ReactBox>
          </AtomContainer>
        </LandingSection>
        <AboutMeSection></AboutMeSection>
      </MainContainer>
    </motion.div>
  );
};
export default HomePage;

{
  /* <Container> */
}
{
  /* <h1>HOME</h1> */
}
{
  /* <button onClick={() => scroll()}>SCROLL</button> */
}
{
  /* </Container> */
}

// <ContainerTest ref={testRef} />
