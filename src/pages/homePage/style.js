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
  margin: 0 auto;
  height: 100%;
  overflow: auto;
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
  width: 203px;
  height: 203px;
  background-color: var(--primary);
  border: 1px solid var(--second);
  border-radius: 50%;
  margin-left: 20px;
  position: relative;
  animation: ${AnimationDivScale} 3s;
  h1 {
    color: var(--white);
  }
  span {
    color: var(--decor);
  }
  p {
    color: var(--white);
  }
  @media (min-width: 1024px) {
    width: 280px;
    height: 280px;
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
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${AtomDiv} 7s infinite linear;
  border-radius: 50%;
  padding: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 35px;
    transform: rotate(-203deg);
    position: fixed;
    top: 76.5%;
    left: 60%;
  }
  @media (min-width: 1024px) {
    img {
      width: 60px;
      transform: rotate(-203deg);
      position: fixed;
      top: 80.5%;
      left: 60%;
    }
  }
`;
export const CssBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${AtomDiv} 7s infinite linear;
  border-radius: 50%;
  padding: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 35px;
    transform: rotate(339deg);
    position: fixed;
    top: 10%;
    left: 33%;
  }
  @media (min-width: 1024px) {
    img {
      width: 60px;
      transform: rotate(338deg);
      position: fixed;
      top: 2%;
      left: 28%;
    }
  }
`;
export const JsBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${AtomDiv} 7s infinite linear;
  border-radius: 50%;
  padding: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 31.5px;
    transform: rotate(-295deg);
    position: fixed;
    top: 29%;
    right: 12.6%;
  }
  @media (min-width: 1024px) {
    img {
      width: 55.5px;
      transform: rotate(-291deg);
      position: fixed;
      top: 28%;
      right: 3.6%;
    }
  }
`;
export const ReactBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${AtomDiv} 7s infinite linear;
  border-radius: 50%;
  padding: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 38.5px;
    transform: rotate(-95deg);
    position: fixed;
    top: 55%;
    left: 10%;
  }
  @media (min-width: 1024px) {
    img {
      width: 72.5px;
      transform: rotate(-107deg);
      position: fixed;
      top: 52%;
      left: 0%;
    }
  }
`;
