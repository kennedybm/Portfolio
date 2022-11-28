import styled from "styled-components";

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: var(--primary);
  @media (min-width: 1024px) {
    height: 125px;
  }
`;
export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 35px;
  @media (min-width: 1024px) {
    height: 45px;
  }
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
      font-size: 30px;
      &:hover {
        font-size: 32px;
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
      font-size: 30px;
      &:hover {
        font-size: 32px;
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
  height: 30px;
  color: var(--white);
  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    font-size: 13px;
    width: 225px;
    font-family: "Inter", sans-serif;
  }
  @media (min-width: 1024px) {
    height: 45px;
    p {
      font-size: 17px;
      width: 290px;
    }
  }
`;
