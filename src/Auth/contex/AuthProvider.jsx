import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = Cookies.get("auth");
    return storedAuth ? JSON.parse(storedAuth) : {};
  });

 
  useEffect(() => {
    Cookies.set("auth", JSON.stringify(auth), { expires: 7 }); 
  }, [auth]);

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
