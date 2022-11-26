import styled, { keyframes } from "styled-components";

const AtomDiv = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
`;
const AnimationDivScale = keyframes`
 0%{
  transform:scale(.1);
  }
  100%{
    transform:scale(1);
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  background-image: url(https://media.giphy.com/media/3o6Zt0EiSgr1cWE6WY/giphy.gif);
  background-size: 100vw 100vh;
  margin: 0 auto;
  height: 100%;
`;

export const LandingSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const AtomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 219px;
  height: 219px;
  border: 1px solid var(--second);
  background-image: url(https://media.giphy.com/media/3osxY5srzVZrwq3cFq/giphy.gif);
  background-size: 100% 100%;
  border-radius: 50%;
  margin-right: 20px;
  position: relative;
  animation: ${AnimationDivScale} 3s;
  font-size: 15px;
  h1 {
    color: var(--white);
    font-family: "Inter", sans-serif;
  }
  span {
    color: var(--decor);
    font-family: "Inter", sans-serif;
  }
  p {
    color: var(--white);
    font-family: "Inter", sans-serif;
  }
  @media (min-width: 1024px) {
    width: 310px;
    height: 310px;
    margin-right: 0px;
    h1 {
      font-size: 21px;
    }
    span {
    }
    p {
      font-size: 20px;
    }
  }
`;
export const HtmlBox = styled.div`
  width: 30%;
  height: 40%;
  position: absolute;
  animation: ${AtomDiv} 7s infinite linear;
  border-radius: 50%;
  padding: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 35px;
    transform: rotate(-197deg);
    position: fixed;
    top: 100.5%;
    left: 57%;
  }
  @media (min-width: 1024px) {
    img {
      width: 60px;
      transform: rotate(-182deg);
      position: fixed;
      top: 110.5%;
      left: 35%;
    }
  }
`;
export const CssBox = styled.div`
  width: 30%;
  height: 40%;
  position: absolute;
  animation: ${AtomDiv} 7s infinite linear;
  border-radius: 50%;
  padding: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 35px;
    transform: rotate(344deg);
    position: fixed;
    top: -18%;
    left: 20%;
  }
  @media (min-width: 1024px) {
    img {
      width: 60px;
      transform: rotate(358deg);
      position: fixed;
      top: -36%;
      left: 31%;
    }
  }
`;
export const JsBox = styled.div`
  width: 30%;
  height: 40%;
  position: absolute;
  animation: ${AtomDiv} 7s infinite linear;
  border-radius: 50%;
  padding: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 31.5px;
    transform: rotate(-287deg);
    position: fixed;
    top: 25%;
    right: -27.4%;
  }
  @media (min-width: 1024px) {
    img {
      width: 55.5px;
      transform: rotate(-272deg);
      position: fixed;
      top: 36%;
      right: -49.4%;
    }
  }
`;
export const ReactBox = styled.div`
  width: 30%;
  height: 40%;
  position: absolute;
  animation: ${AtomDiv} 7s infinite linear;
  border-radius: 50%;
  padding: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 38.5px;
    transform: rotate(-55deg);
    position: fixed;
    top: 58%;
    left: -28%;
  }
  @media (min-width: 1024px) {
    img {
      width: 72.5px;
      transform: rotate(-150deg);
      position: fixed;
      top: 31.5%;
      left: -53%;
    }
  }
`;
