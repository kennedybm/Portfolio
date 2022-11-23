import styled, { keyframes } from "styled-components";

const GrowOut = keyframes`
  0% {
        transform: scale(0)
    }
    80% {
        transform: scale(1.1)
    }
    100% {
        transform: scale(1)
    }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 2%;
  top: 1%;
  z-index: 1;
  width: 32px;
  height: 34px;
  border-radius: 5px;
  background-color: var(--second);

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 31px;
    height: 33px;
    font-size: 20px;
    color: var(--white);
    background-color: transparent;
    border: none;
    border-radius: 4px;
  }
  @media (min-width: 1024px) {
    right: 0.5%;
    width: 40px;
  }
`;

export const LanguagesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-evenly;
  position: fixed;
  right: 2%;
  top: 7.4%;
  z-index: 1;
  animation: ${GrowOut} 300ms ease-in-out forwards;
  transform-origin: top center;
  border-radius: 5px;
  width: 100px;
  height: 60px;
  background-color: var(--second);
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    height: 50%;
    width: 100%;
    cursor: pointer;
    h2 {
      padding-left: 5px;
      color: var(--white);
      font-size: 12px;
    }
  }
  @media (min-width: 1024px) {
    right: 0.5%;
    top: 6.4%;
  }
`;
