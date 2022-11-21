import sublinks from "Applications/StripeMenu/data";
import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        openSubmenu,
        closeSubmenu,
        closeSidebar,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
