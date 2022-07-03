import { ScrollToProvider } from "./scroll";
import { ModalProvider } from "./modal";

const Providers = ({ children }) => {
  return (
    <ScrollToProvider>
      <ModalProvider>{children}</ModalProvider>
    </ScrollToProvider>
  );
};
export default Providers;
