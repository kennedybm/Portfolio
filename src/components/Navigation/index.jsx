import { useScrollTo } from "../../providers/scroll";
import { NavContainer } from "./styles";
import Button from "../Button";
import { RiHomeSmile2Line } from "react-icons/ri";
import { BiUserPin } from "react-icons/bi";
import { VscTools } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

const NavigationBar = () => {
  const { homeRef, aboutMeRef, scroll } = useScrollTo();
  return (
    <NavContainer>
      <Button
        ref={homeRef}
        onClick={() => scroll("home")}
        colorSchema={"--second"}
      >
        <RiHomeSmile2Line />
      </Button>
      <Button
        ref={aboutMeRef}
        onClick={() => scroll("about")}
        colorSchema={"--second"}
      >
        <BiUserPin />
      </Button>
      <Button onClick={() => scroll("skills")} colorSchema={"--second"}>
        <VscTools />
      </Button>
      <Button colorSchema={"--second"}>
        <FaIcons.FaGraduationCap />
      </Button>
      <Button colorSchema={"--second"}>
        <FaIcons.FaLaptopCode />
      </Button>
      <Button colorSchema={"--second"} type="bottom">
        <RiHomeSmile2Line />
      </Button>
    </NavContainer>
  );
};
export default NavigationBar;
