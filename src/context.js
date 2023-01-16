import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);

  function openSidebar() {
    setIsSidebar(true);
  }
  function closeSidebar() {
    setIsSidebar(false);
  }

  return (
    <AppContext.Provider value={{ isSidebar, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppContext;
