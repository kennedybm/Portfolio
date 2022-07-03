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
    box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
    -webkit-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
    -moz-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  }
  @media (min-width: 1024px) {
    width: 750px;
  }
`;

export const ModalProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 312px;
  height: 60vh;
  background-color: var(--second);
  position: fixed;
  top: 17%;
  z-index: 1;
  animation: ${AnimationDivScale} 1.5s;
  border-radius: 5px;
  box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  -webkit-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  -moz-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  @media (min-width: 1024px) {
    width: 650px;
    height: 70vh;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 7vh;
  padding-top: 5px;
  h2 {
    padding-left: 55px;
    font-size: 19px;
  }
  button {
    font-size: 19px;
    background-color: transparent;
    color: var(--white);
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
    h2 {
      padding-left: 215px;
      font-size: 27px;
    }
    button {
      padding-bottom: 18px;
      padding-right: 35px;
      font-size: 23px;
    }
  }
`;

export const LogoDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 44vh;
  @media (min-width: 1024px) {
    height: 51vh;
  }
`;
export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;

  img {
    width: 95%;
    height: 100%;
    border-radius: 4px;
  }
  @media (min-width: 1024px) {
    height: 80vh;
  }
`;
export const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 25vh;

  p {
    font-size: 16px;
    color: var(--white);
  }
  @media (min-width: 1024px) {
    font-size: 19px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 8vh;

  a {
    display: flex;
    justify-content: space-evenly;
    width: 95px;
    color: var(--white);
    text-decoration: none;
    font-size: 15px;
    &:hover {
      color: var(--decor);
    }
  }
  div {
    a {
      display: flex;
      justify-content: space-evenly;
      width: 70px;
      color: var(--white);
      text-decoration: none;
      font-size: 15px;
      &:hover {
        color: var(--decor);
      }
    }
  }
  @media (min-width: 1024px) {
    justify-content: space-around;
    a {
      width: 120px;
      font-size: 19px;
    }
    div {
      width: 100px;
      display: flex;
      justify-content: center;

      a {
        font-size: 19px;
        span {
          padding-right: 4px;
          font-size: 19 px;
        }
      }
    }
  }
`;
