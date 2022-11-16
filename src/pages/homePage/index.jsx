import { motion } from "framer-motion";
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
} from "./style";
import NavigationBar from "../../components/Navigation";
import AboutMe from "../../components/AboutMe";
import Technologies from "../../components/Technologies";
import Certificates from "../../components/Certificates";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import Languages from "../../components/Languages";
import { useScrollTo } from "../../providers/scroll";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  const {
    homeRef,
    aboutMeRef,
    skillsRef,
    certificatesRef,
    projectsRef,
    footerRef,
  } = useScrollTo();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <MainContainer>
        <NavigationBar />
        <LandingSection ref={homeRef}>
          <AtomContainer>
            <h1>
              <span>{t("title.one")}</span>
              {t("title.two")}
            </h1>
            <p>{t("title.three")}</p>
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
        <Languages />
        <AboutMe ref={aboutMeRef} />
        <Technologies ref={skillsRef} />
        <Certificates ref={certificatesRef} />
        <Projects ref={projectsRef} />
        <Footer ref={footerRef} />
      </MainContainer>
    </motion.div>
  );
};
export default HomePage;
