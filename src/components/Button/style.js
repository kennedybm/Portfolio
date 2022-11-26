import styled from "styled-components";

const Colors = (props) => {
  return props === "--second"
    ? "var(--second)"
    : props === "--decor"
    ? "var(--decor)"
    : props === "--primary"
    ? "var(--primary)"
    : props === "--black"
    ? "var(--black)"
    : props === "transparent" && "transparent";
};

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background: ${(props) => Colors(props.colorSchema)};
  transform: ${(props) => props.type === "bottom" && "rotate(-180deg)"};
  border: none;
  font-size: 19px;
  &:hover {
    color: ${(props) =>
      props.type === "unset" ? "var(--second)" : "var(--decor)"};
    font-size: ${(props) =>
      props.type === "unset"
        ? "14.8px"
        : props.type === "default"
        ? "27px"
        : props.type === "nohover" && "19px"};
  }
`;
