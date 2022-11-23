import { forwardRef } from "react";
import { useScrollTo } from "../../providers/scroll";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Button from "../Button";
import {
  TechnologiesSection,
  TechnologiesContainer,
  TechsBox,
  ButtonsContainer,
  ImgBox,
  TextBox,
} from "./style";
import { techList } from "../../data/techs";

const Technologies = forwardRef((props, ref) => {
  const [techs, setTechs] = useState("front");

  const frontTechs = techList.filter((item) => item.category === "front-end");
  const backTechs = techList.filter((item) => item.category === "back-end");

  const { carouselRef } = useScrollTo();

  const { t } = useTranslation();

  return (
    <TechnologiesSection ref={ref}>
      <h2>{t("technologies.title")}</h2>
      <ButtonsContainer>
        <Button onClick={() => setTechs("front")} colorSchema={"--second"}>
          Front End
        </Button>
        <Button onClick={() => setTechs("back")} colorSchema={"--second"}>
          Back End
        </Button>
      </ButtonsContainer>
      <TechnologiesContainer ref={carouselRef}>
        {techs === "front"
          ? frontTechs.map((techs) => (
              <TechsBox key={techs.name}>
                <ImgBox>
                  <img src={techs.img} alt="" />
                </ImgBox>
                <TextBox>
                  <span>{techs.name}</span>
                </TextBox>
              </TechsBox>
            ))
          : backTechs.map((techs) => (
              <TechsBox key={techs.name}>
                <ImgBox>
                  <img src={techs.img} alt="" />
                </ImgBox>
                <TextBox>
                  <span>{techs.name}</span>
                </TextBox>
              </TechsBox>
            ))}
      </TechnologiesContainer>
    </TechnologiesSection>
  );
});
export default Technologies;

{
  /* <FrontBox>
          <div>
            <h3>Front-End</h3>
          </div>
          <li>
            <img src={htmlImg} alt="" />
            <span>HTML5</span>
          </li>
          <li>
            <img src={cssImg} alt="" />
            <span>CSS3</span>
          </li>
          <li>
            <img src={jsImg} alt="" />
            <span>Javascript</span>
          </li>
          <li>
            <img src={reactImg} alt="" />
            <span>ReactJS</span>
          </li>
          <li>
            <img src={typescriptImg} alt="" />
            <span>Typescript</span>
          </li>
          <li>
            <GiSandsOfTime />
            <span>Em construção...</span>
          </li>
        </FrontBox>
        <BackBox>
          <div>
            <h3>Back-End</h3>
          </div>
          <li>
            <Img type={"1"} src={nodeJsImg} alt="" />
            <span>NodeJS</span>
          </li>
          <li>
            <Img type={"2"} src={expressImg} alt="" />
            <span>ExpressJS</span>
          </li>
          <li>
            <Img type={"3"} src={postgresqlImg} alt="" />
            <span>PostgreSQL</span>
          </li>
          <li>
            <GiSandsOfTime />
            <span>Em construção...</span>
          </li>
        </BackBox> */
}
