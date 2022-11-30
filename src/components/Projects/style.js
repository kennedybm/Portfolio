import styled from "styled-components";

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 380px;
  background-color: var(--black);
  width: 100%;
  @media (min-width: 425px) {
    height: 390px;
    h2 {
      font-size: 27px;
    }
  }
  @media (min-width: 1024px) {
    height: 500px;
    h2 {
      font-size: 34px;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 46px;
  h2 {
    color: var(--decor);
    margin-bottom: 15px;
    font-size: 25px;
    font-family: "Lexend", sans-serif;
  }
  p {
    color: var(--decor);
    font-weight: bold;
    font-size: 18px;
    font-family: "Lexend", sans-serif;
    padding: 0px 0px 12px 7px;
    letter-spacing: 1px;
  }
  @media (min-width: 425px) {
    h2 {
      font-size: 27px;
    }
  }
  @media (min-width: 1024px) {
    width: 175px;
    padding-bottom: 6px;
    h2 {
      font-size: 34px;
    }
    p {
      font-size: 22px;
    }
  }
`;

export const ProjectsContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  scroll-snap-type: x mandatory;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  scroll-behavior: smooth;
  margin-right: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 425px) {
    width: 325px;
    height: 270px;
    margin-right: 0px;
  }
  @media (min-width: 1024px) {
    width: 900px;
    height: 280px;
  }
`;

export const ProjectsCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border-radius: 5px;
  background-color: var(--primary);

  h3 {
    font-size: 16px;
    color: var(--white);
    padding-bottom: 6px;
    font-family: "Inter", sans-serif;
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
  @media (min-width: 425px) {
    width: 325px;
    height: 270px;
  }
  @media (min-width: 1024px) {
    margin: 0px 10px 0px 0px;
    border-radius: 5px;
    width: 293px;
    height: 280px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 16px;
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
  @media (min-width: 425px) {
    padding-right: 0px;
  }
`;
