import React, { useState, createContext } from "react";

const ROLE_KEY = "role";
export const RoleContext = createContext();
export const RoleContextProvider = ({ children }) => {
  const roleInStorage = localStorage.getItem(ROLE_KEY);
  const [state, setState] = useState({
    role: roleInStorage ? JSON.parse(roleInStorage) : undefined,
  });

  return (
    <RoleContext.Provider
      value={{
        ...state,
        setRole: (role) => {
          setState({
            ...state,
            role: role,
          });
          localStorage.setItem(ROLE_KEY, JSON.stringify(role));
        },
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};
