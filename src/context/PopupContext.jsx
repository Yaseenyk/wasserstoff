import { createContext, useState, useContext } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
  const togglePopup = () => {
    setIsOpen((open) => !open);
  };

  return (
    <PopupContext.Provider value={{ isOpen, togglePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);

  if (!context) {
    throw new Error("Popup context must be used within a PopupProvider");
  }
  return context;
};
