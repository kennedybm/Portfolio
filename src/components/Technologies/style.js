import styled, { css } from "styled-components";

export const TechnologiesSection = styled.section`
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

export const TechnologiesContainer = styled.div`
  overflow: auto;
  display: flex;
  align-items: center;
  scroll-snap-type: x mandatory;
  width: 200px;
  height: 40vh;
  border-radius: 5px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  -webkit-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  -moz-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
  @media (min-width: 1024px) {
    width: 465px;
    height: 45vh;
  }
`;

export const FrontBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40.8vh;
  width: 200px;
  margin: 0px 7px 0px 20px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border-radius: 5px;
  background-color: var(--primary);
  h3 {
    color: var(--decor);
    margin: 10px 0px 10px 0px;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 135px;
    text-align: start;
    padding-bottom: 7px;
    color: var(--white);

    img {
      width: 25px;
    }
    span {
      color: var(--white);
      padding-left: 7px;
      font-size: 15px;
    }
  }
  @media (min-width: 1024px) {
    &:hover {
      width: 202px;
      box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
      -webkit-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
      -moz-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
    }
    justify-content: flex-start;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 50px;
      h3 {
        font-size: 20px;
      }
    }
    li {
      padding-bottom: 7px;
      img {
        width: 32px;
      }
      span {
        font-size: 16px;
      }
    }
  }
`;

export const BackBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40.8vh;
  width: 200px;
  margin: 0px 7px 0px 20px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border-radius: 5px;
  background-color: var(--primary);
  h3 {
    color: var(--decor);
    margin: 10px 0px 10px 0px;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 132px;
    text-align: start;
    padding-bottom: 7px;
    color: var(--white);

    span {
      color: var(--white);
      padding-left: 7px;
      font-size: 15px;
    }
  }
  @media (min-width: 1024px) {
    &:hover {
      width: 202px;
      box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
      -webkit-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
      -moz-box-shadow: 0px 1px 4px 3px rgba(57, 44, 65, 0.75);
    }
    justify-content: flex-start;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 50px;
      h3 {
        font-size: 20px;
      }
    }

    li {
      padding-bottom: 10px;

      span {
        font-size: 16px;
      }
    }
  }
`;

export const DotsBox = styled.div`
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
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: ${(props) =>
    props.type === "1"
      ? "40px"
      : props.type === "2"
      ? "30px"
      : props.type === "3" && "30px"};
  height: ${(props) =>
    props.type === "1"
      ? "40px"
      : props.type === "2"
      ? "32px"
      : props.type === "3" && "30px"};
`;
