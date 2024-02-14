import { createContext, useEffect, useState, useContext } from "react";

const viewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [view, setView] = useState("");

  useEffect(() => {
    // Function to update view based on window width
    const updateView = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setView("mobile");
      } else if (width <= 1024) {
        setView("tablet");
      } else {
        setView("desktop");
      }
    };

    // Initial update of the view
    updateView();

    // Event listener for window resize events
    const handleResize = () => {
      updateView();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  // Context value containing view state
  const contextValue = { view };

  // Provide the context value to children components
  return (
    <viewContext.Provider value={contextValue}>{children}</viewContext.Provider>
  );
};

export const useView = () => {
  const context = useContext(viewContext);

  if (!context) {
    throw new Error("Screen size not defined");
  }
  return context;
};
