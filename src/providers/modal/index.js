import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalCertificates, setModalCertificates] = useState(false);
  const [modalProjects, setModalProjects] = useState(false);
  const [modalDb, setModalDb] = useState([]);

  const handleCertificatesModal = () => {
    setModalCertificates(!modalCertificates);
  };

  const handleProjectsModal = () => {
    setModalProjects(!modalProjects);
  };

  return (
    <ModalContext.Provider
      value={{
        modalDb,
        setModalDb,
        modalCertificates,
        handleCertificatesModal,
        modalProjects,
        handleProjectsModal,
        setModalProjects,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => useContext(ModalContext);
