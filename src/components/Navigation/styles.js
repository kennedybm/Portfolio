import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 32px;
  height: 170px;
  position: fixed;
  right: 2%;
  top: 33%;
  z-index: 1;
  background-color: var(--second);
  border-radius: 5px;
  border: 1px solid var(--second);
  button {
    color: var(--white);
    margin: 3px 0px 3px 0px;
  }
  @media (min-width: 1024px) {
    top: 31%;
    right: 0.5%;
    width: 45px;
    height: 255px;
    button {
      font-size: 26px;
      margin: 10px 0px 3px 0px;
    }
  }
`;
