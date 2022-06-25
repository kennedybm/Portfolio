import styled, { css } from "styled-components";

const Colors = (props) => {
  return props === "--second"
    ? "var(--second)"
    : props === "--grey-1"
    ? "var(--grey-1)"
    : props === "--negative"
    ? "var(--negative)"
    : props === "--grey-3" && "var(--grey-3)";
};

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background: ${(props) => Colors(props.colorSchema)};
  transform: ${(props) => props.type === "bottom" && "rotate(-180deg)"};
  border: none;
  margin: 3px 0px 3px 0px;
  font-size: 19px;
  &:hover {
    color: var(--decor);
    font-size: 27px;
  }
`;
