import styled from "styled-components";

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;
  background-color: var(--primary);
`;
export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 5vh;
`;

export const LinkedinBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%;
  a {
    color: var(--white);
    font-size: 22px;
    padding-right: 5px;
    &:hover {
      color: var(--decor);
      font-size: 23px;
    }
  }
  @media (min-width: 1024px) {
    a {
      font-size: 26px;
      &:hover {
        font-size: 27px;
      }
    }
  }
`;

export const GitBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 50%;
  a {
    color: var(--white);
    font-size: 22px;
    padding-left: 5px;
    &:hover {
      color: var(--decor);
      font-size: 23px;
    }
  }
  @media (min-width: 1024px) {
    a {
      font-size: 26px;
      &:hover {
        font-size: 27px;
      }
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;
  color: var(--white);
  p {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    font-size: 13px;
    width: 70%;
    max-width: 225px;
    font-family: "Inter", sans-serif;
  }
  @media (min-width: 1024px) {
    p {
      font-size: 17px;
      max-width: 300px;
    }
  }
`;
