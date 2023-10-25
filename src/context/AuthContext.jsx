import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
import Cookies from "js-cookie";
import { EXPIRE_DATE, ROLE, TOKEN } from "../constants/const";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuthenticated, setisAuthenticated] = useState(checkToken());
  const [role, setRole] = useState(Cookies.get(ROLE) || null  )
  function checkToken() {
    const token = Cookies.get(TOKEN);
    const expireDate = Cookies.get(EXPIRE_DATE);
    if (token && expireDate >= Date.now()) {
      return true;
    }
    return false;
  }
  const state = {
    isAuthenticated,
    setisAuthenticated,
    setRole,
    role
  };
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthContextProvider;
