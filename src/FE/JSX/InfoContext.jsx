import { useState, createContext } from "react";

export const InfoContext = createContext(null);
export const InfoProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(0);

  return (
    <InfoContext.Provider
      value={{
        state: {
          modalOpen,
        },
        actions: {
          setModalOpen,
        },
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};
