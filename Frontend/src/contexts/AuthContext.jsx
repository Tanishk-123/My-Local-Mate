import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }){
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("lsf_user")) || null } catch { return null }
  });

  const login = ({ name, email }) => {
    const u = { name, email };
    setUser(u);
    localStorage.setItem("lsf_user", JSON.stringify(u));
    return true;
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("lsf_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
