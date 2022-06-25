import styled from "styled-components";

export const AboutMeSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70vh;
  background-color: var(--primary);
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
`;
export const ProfileDescBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 70%;
  h2 {
    color: var(--decor);
    padding-bottom: 5px;
  }
  p {
    color: var(--white);
  }
`;
