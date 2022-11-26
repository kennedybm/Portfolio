import { forwardRef } from "react";
import { useScrollTo } from "../../providers/scroll";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { techList } from "../../data/techs";
import Button from "../Button";
import {
  TechnologiesSection,
  TechnologiesContainer,
  TechsBox,
  ButtonsContainer,
  ImgBox,
  TextBox,
} from "./style";

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
        <Button onClick={() => setTechs("front")} colorSchema={"--primary"}>
          Front End
        </Button>
        <Button onClick={() => setTechs("back")} colorSchema={"--primary"}>
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
