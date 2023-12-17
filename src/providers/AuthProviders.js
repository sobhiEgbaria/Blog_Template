import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = ({ userName, password }) => {
    // check if valid
    setUser({ userName: "Sobhi" });
  };

  const value = { user, signIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
