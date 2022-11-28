import styled from "styled-components";

export const CertificatesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 360px;
  background-color: var(--primary);
  width: 100%;
  h2 {
    color: var(--decor);
    margin-bottom: 15px;
    font-size: 25px;
    font-family: "Lexend", sans-serif;
  }
  @media (min-width: 425px) {
    height: 380px;
    h2 {
      font-size: 27px;
    }
  }
  @media (min-width: 1024px) {
    height: 600px;
    h2 {
      font-size: 34px;
    }
  }
`;

export const CertificatesContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  scroll-snap-type: x mandatory;
  width: 230px;
  height: 220px;
  border-radius: 5px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  button {
    height: 30px;
    background-color: yellow;
    border-radius: 5px;
    width: 30px;
  }
  @media (min-width: 425px) {
    width: 300px;
    height: 240px;
  }
  @media (min-width: 1024px) {
    width: 560px;
    height: 400px;
    padding-right: 16px;
    border-radius: 5px;
  }
`;

export const CertificatesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 230px;
  flex-shrink: 0;
  scroll-snap-align: start;
  cursor: zoom-in;
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  @media (min-width: 425px) {
    width: 300px;
    height: 240px;
  }
  @media (min-width: 1024px) {
    width: 570px;
    height: 400px;
    padding-left: 5px;
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
