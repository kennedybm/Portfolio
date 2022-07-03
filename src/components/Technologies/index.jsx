import { forwardRef } from "react";
import { useScrollTo } from "../../providers/scroll";
import Button from "../Button";
import {
  TechnologiesSection,
  TechnologiesContainer,
  BackBox,
  FrontBox,
  DotsBox,
  Img,
} from "./style";
import * as Fcbuttons from "react-icons/fc";
import { GiSandsOfTime } from "react-icons/gi";
import htmlImg from "../../assets/img/html5.png";
import cssImg from "../../assets/img/css.png";
import jsImg from "../../assets/img/javascript.png";
import reactImg from "../../assets/img/react.png";
import typescriptImg from "../../assets/img/typescript.png";
import nodeJsImg from "../../assets/img/nodejs.png";
import expressImg from "../../assets/img/express.png";
import postgresqlImg from "../../assets/img/postgresql.png";

const Technologies = forwardRef((props, ref) => {
  const { carouselRef, scroll } = useScrollTo();

  return (
    <TechnologiesSection ref={ref}>
      <h2>Tecnologias</h2>
      <TechnologiesContainer ref={carouselRef}>
        <FrontBox>
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
        </BackBox>
      </TechnologiesContainer>
      <DotsBox>
        <Button onClick={() => scroll("left")} colorSchema={"--primary"}>
          <Fcbuttons.FcPrevious />
        </Button>
        <Button onClick={() => scroll("right")} colorSchema={"--primary"}>
          <Fcbuttons.FcNext />
        </Button>
      </DotsBox>
    </TechnologiesSection>
  );
});
export default Technologies;
