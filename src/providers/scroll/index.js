import { createContext, useContext, useRef } from "react";

const ScrollToContext = createContext();

export const ScrollToProvider = ({ children }) => {
  const homeRef = useRef();
  const aboutMeRef = useRef();
  const skillsRef = useRef();

  const scroll = (value) => {
    switch (value.toLowerCase()) {
      case "home":
        return homeRef.current.scrollIntoView();
      case "about":
        return aboutMeRef.current.scrollIntoView({ block: "center" });
      case "skills":
        return skillsRef.current.scrollIntoView({ block: "center" });
      default:
        return null;
    }
  };

  return (
    <ScrollToContext.Provider
      value={{
        homeRef,
        aboutMeRef,
        skillsRef,
        scroll,
      }}
    >
      {children}
    </ScrollToContext.Provider>
  );
};
export const useScrollTo = () => useContext(ScrollToContext);
