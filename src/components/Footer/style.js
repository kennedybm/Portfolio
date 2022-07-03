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
  justify-content: space-evenly;
  width: 50%;
  height: 5vh;
  a {
    color: var(--white);
    font-size: 22px;
    text-decoration: none;
    &:hover {
      color: var(--decor);
      font-size: 23px;
    }
  }
  @media (min-width: 1024px){
    width: 20%;
    a{
      font-size: 27px;
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
  }
  span {
  }
`;
