import styled from "styled-components";

export const TechnologiesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 75vh;
  background-color: var(--black);
  width: 100%;
  h2 {
    color: var(--decor);
    margin: 15px 0px 15px 0px;
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    h2 {
      font-size: 33px;
      margin: 15px 0px 15px 0px;
    }
  }
`;

export const TechnologiesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  width: 220px;
  height: 50vh;
  border-radius: 5px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  -webkit-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  -moz-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  @media (min-width: 768px) {
    width: 610px;
    height: 51vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
    box-shadow: none;
  }
  @media (min-width: 1024px) {
    width: 620px;
    height: 51vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
    box-shadow: none;
  }
`;

export const TechsBox = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 13vh;
  width: 200px;
  flex-shrink: 0;
  border-radius: 5px;
  background-color: var(--primary);
  box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  -webkit-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  -moz-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  margin: 7px 0px 7px 0px;
  &:hover {
    img {
      width: 45%;
    }
  }
  @media (min-width: 768px) {
    width: 290px;
  }

  @media (min-width: 1024px) {
    width: 290px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 160px;
  margin: 15px 0px 15px 0px;
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--white);
    height: 30px;
    width: 45%;
    border-radius: 6px;
    font-size: 12px;
    &:focus {
      outline: 1px solid var(--decor);
    }
  }
  @media (min-width: 1024px) {
    /* display: none; */
  }
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  img {
    width: 40%;
    padding-left: 20px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  span {
    color: var(--white);
    font-weight: 500;
  }
`;
