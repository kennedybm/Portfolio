import { createContext, useContext, useRef } from "react";

const ScrollToContext = createContext();

export const ScrollToProvider = ({ children }) => {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const certificatesRef = useRef(null);
  const carouselRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);
  const certificatesCarouselRef = useRef(null);
  const projectsCarouselRef = useRef(null);

  const scroll = (value) => {
    switch (value.toLowerCase()) {
      case "home":
        return homeRef.current.scrollIntoView();
      case "about":
        return aboutMeRef.current.scrollIntoView({ block: "center" });
      case "skills":
        return skillsRef.current.scrollIntoView({ block: "center" });
      case "certificates":
        return certificatesRef.current.scrollIntoView({ block: "center" });
      case "projects":
        return projectsRef.current.scrollIntoView({ block: "center" });
      case "footer":
        return footerRef.current.scrollIntoView({ block: "center" });
      case "left":
        return (carouselRef.current.scrollLeft -=
          carouselRef.current.offsetWidth);
      case "right":
        return (carouselRef.current.scrollLeft +=
          carouselRef.current.offsetWidth);
      case "certificateleft":
        return (certificatesCarouselRef.current.scrollLeft -=
          certificatesCarouselRef.current.offsetWidth);
      case "certificateright":
        return (certificatesCarouselRef.current.scrollLeft +=
          certificatesCarouselRef.current.offsetWidth);
      case "projectsleft":
        return (projectsCarouselRef.current.scrollLeft -=
          projectsCarouselRef.current.offsetWidth);
      case "projectsright":
        return (projectsCarouselRef.current.scrollLeft +=
          projectsCarouselRef.current.offsetWidth);
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
        certificatesRef,
        certificatesCarouselRef,
        projectsCarouselRef,
        projectsRef,
        carouselRef,
        footerRef,
        scroll,
      }}
    >
      {children}
    </ScrollToContext.Provider>
  );
};
export const useScrollTo = () => useContext(ScrollToContext);
