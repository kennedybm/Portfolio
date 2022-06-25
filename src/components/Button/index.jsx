import { forwardRef } from "react";
import { StyledButton } from "./style";

const Button = forwardRef(({ children, colorSchema, ...rest }, ref) => {
  return (
    <StyledButton ref={ref} colorSchema={colorSchema} {...rest}>
      {children}
    </StyledButton>
  );
});
export default Button;
