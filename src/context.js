import { createContext, useContext, useState } from "react";
import sublinks from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  function openSidebar() {
    setIsSidebar(true);
  }
  function closeSidebar() {
    setIsSidebar(false);
  }

  function openSubmenu(text, coordinates) {
    setLocation(coordinates);
    const pageData = sublinks.find((link) => link.page === text);
    setPage(pageData);
    setIsSubmenu(true);
  }
  function closeSubmenu() {
    setIsSubmenu(false);
  }

  const value = {
    isSidebar,
    openSidebar,
    closeSidebar,
    isSubmenu,
    openSubmenu,
    closeSubmenu,
    location,
    page,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppContext;
