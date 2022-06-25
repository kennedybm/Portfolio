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
  height: 65vh;
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
  width: 180px;
  height: 180px;
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
`;
export const HtmlBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${AtomDiv} 10s infinite linear;
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
`;
export const CssBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${AtomDiv} 10s infinite linear;
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
`;
export const JsBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${AtomDiv} 10s infinite linear;
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
`;
export const ReactBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${AtomDiv} 10s infinite linear;
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
`;
