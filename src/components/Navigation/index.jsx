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
  const { scroll } = useScrollTo();

  return (
    <NavContainer>
      <Button
        onClick={() => scroll("home")}
        colorSchema={"--second"}
        type="default"
      >
        <RiHomeSmile2Line />
      </Button>
      <Button
        onClick={() => scroll("about")}
        colorSchema={"--second"}
        type="default"
      >
        <BiUserPin />
      </Button>
      <Button
        onClick={() => scroll("skills")}
        colorSchema={"--second"}
        type="default"
      >
        <VscTools />
      </Button>
      <Button
        onClick={() => scroll("certificates")}
        colorSchema={"--second"}
        type="default"
      >
        <FaIcons.FaGraduationCap />
      </Button>
      <Button
        onClick={() => scroll("projects")}
        colorSchema={"--second"}
        type="default"
      >
        <FaIcons.FaLaptopCode />
      </Button>
      <Button
        onClick={() => scroll("footer")}
        colorSchema={"--second"}
        type="bottom"
      >
        <RiHomeSmile2Line />
      </Button>
    </NavContainer>
  );
};
export default NavigationBar;
