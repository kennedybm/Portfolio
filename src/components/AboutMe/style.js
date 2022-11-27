import styled from "styled-components";

export const AboutMeSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  background-color: var(--primary);
  @media (min-width: 1024px) {
    height: 550px;
    flex-direction: row;
    justify-content: center;
  }
`;
export const ProfileImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 2px solid var(--second);
  }
  @media (min-width: 1024px) {
    width: 45%;
    img {
      width: 260px;
      height: 260px;
      border-radius: 50%;
      border: 2px solid var(--second);
    }
  }
`;
export const ProfileDescBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  width: 73%;
  max-width: 370px;
  h2 {
    color: var(--decor);
    font-size: 20px;
    font-family: "Lexend", sans-serif;
    padding-bottom: 25px;
  }
  p {
    color: var(--white);
    font-family: "Inter", sans-serif;
  }
  @media (min-width: 1024px) {
    padding-right: 60px;
    align-items: flex-start;
    h2 {
      font-size: 32px;
    }
    p {
      text-align: start;
      font-size: 21px;
    }
  }
`;
