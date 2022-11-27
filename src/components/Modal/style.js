import styled, { keyframes } from "styled-components";

const AnimationDivScale = keyframes`
 0%{
  transform:scale(.1);
  }
  100%{
    transform:scale(1);
  }
`;

export const ModalCertificates = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 305px;
  height: 60vh;
  position: fixed;
  top: 17%;
  z-index: 1;
  animation: ${AnimationDivScale} 1.5s;

  img {
    width: 100%;
    height: 100vh;
    cursor: zoom-out;
    border-radius: 8px;
  }
  @media (min-width: 1024px) {
    width: 750px;
  }
`;

export const CloseModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 30px;
  height: 54px;
  margin-top: 5px;
  &:hover {
    border-color: var(--decor);
  }
  button {
    width: 29px;
    height: 28px;
    align-items: center;
    font-size: 19px;
    color: var(--white);
    border-radius: 50%;
    background-color: var(--second);
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ModalProjects = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 345px;
  background-color: var(--primary);
  position: fixed;
  top: 17%;
  z-index: 3;
  animation: ${AnimationDivScale} 1.5s;
  border-radius: 5px;
  box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  -webkit-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  -moz-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  @media (min-width: 1024px) {
    width: 655px;
    height: 560px;
    top: 6%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 8vh;
  @media (min-width: 1024px) {
    margin-top: 5px;
    height: 50px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  h3 {
    font-size: 19px;
    color: var(--decor);
    font-family: "Lexend", sans-serif;
  }

  @media (min-width: 1024px) {
    justify-content: center;
    h3 {
      font-size: 27px;
    }
  }
`;

export const TitleButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 21%;
  button {
    background-color: transparent;
    color: var(--white);
    font-size: 19px;
  }
  @media (min-width: 1024px) {
    button {
      font-size: 25px;
      padding-left: 60px;
    }
  }
`;

export const LogoDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 46vh;
  margin: 6px 0px 0px 0px;
  @media (min-width: 1024px) {
    height: 450px;
  }
`;
export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  margin-bottom: 5px;
  img {
    width: 95%;
    height: 100%;
    border-radius: 5px;
  }
  @media (min-width: 1024px) {
    height: 45vh;
  }
`;
export const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  width: 90%;
  height: 100px;
  text-align: start;
  overflow-y: scroll;
  p {
    font-size: 14px;
    color: var(--white);
    font-family: "Inter", sans-serif;
  }
  &::-webkit-scrollbar {
    width: 9px;
    background-color: var(--primary);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--second);
    border-radius: 3px;
  }
  @media (min-width: 1024px) {
    margin-top: 5px;
    height: 150px;
    &::-webkit-scrollbar {
      width: 11px;
    }
    p {
      font-size: 19px;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 8vh;
  @media (min-width: 1024px) {
    height: 50px;
  }
`;

export const LinksGitBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  a {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 110px;
    color: var(--white);
    text-decoration: none;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    &:hover {
      color: var(--decor);
    }
  }
  @media (min-width: 1024px) {
    a {
      width: 145px;
      font-size: 20px;
    }
  }
`;

export const LinksVisitBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  a {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 70px;
    color: var(--white);
    text-decoration: none;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    &:hover {
      color: var(--decor);
    }
  }
  @media (min-width: 1024px) {
    a {
      width: 100px;
      font-size: 20px;
    }
  }
`;
