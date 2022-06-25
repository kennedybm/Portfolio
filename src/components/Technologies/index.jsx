import { forwardRef } from "react";
import { TechnologiesSection } from "./style";

const Technologies = forwardRef((props, ref) => {
  return <TechnologiesSection ref={ref}></TechnologiesSection>;
});
export default Technologies;
