import React, { createContext } from "react";
import usefirebase from "../Hook/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContext = usefirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
