import styled from "styled-components";

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background-color: var(--black);
  width: 100%;
  h2 {
    color: var(--decor);
    margin-bottom: 15px;
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    h2 {
      font-size: 33px;
    }
  }
`;

export const ProjectsContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  scroll-snap-type: x mandatory;
  width: 220px;
  height: 40vh;
  border-radius: 5px;
  scroll-behavior: smooth;
  box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  -webkit-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  -moz-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 1024px) {
    width: 460px;
    height: 40vh;
  }
`;

export const ProjectsCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 220px;
  margin: 0px 7px 0px 20px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border-radius: 5px;
  background-color: var(--second);

  h3 {
    font-size: 16px;
    color: var(--white);
    padding-bottom: 6px;
  }
  img {
    width: 90%;
    height: 70%;
    border-radius: 5px;
  }
  button {
    background-color: transparent;
    color: var(--white);
    padding-top: 5px;
    height: 20px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    color: var(--white);
    margin-right: 5px;
    height: 21px;
    width: 25px;
    border-radius: 10px;
    margin-top: 10px;
    &:focus {
      outline: 1px solid var(--second);
    }
  }
`;
