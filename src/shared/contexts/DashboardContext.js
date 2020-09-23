import React, { useState, createContext } from "react";

const ORGANIZATION_ID_KEY = "organizationId";
const SITE_ID_KEY = "siteId";
const ROLE_KEY = "role";

export const DashboardContext = createContext();
export const DashboardContextProvider = ({ children }) => {
  const [state, setState] = useState({
    organizationId: localStorage.getItem(ORGANIZATION_ID_KEY),
    siteId: localStorage.getItem(SITE_ID_KEY),
    role: localStorage.getItem(ROLE_KEY),
  });

  return (
    <DashboardContext.Provider
      value={{
        ...state,
        setSite: (id) => {
          setState({
            ...state,
            siteId: id,
          });
          localStorage.setItem(SITE_ID_KEY, id);
        },
        setOrganization: (id) => {
          setState({
            ...state,
            organizationId: id,
          });
          localStorage.setItem(ORGANIZATION_ID_KEY, id);
        },
        setRole: (perm) => {
          setState({
            ...state,
            role: perm,
          });
          localStorage.setItem(ROLE_KEY, perm);
        },
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
