import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axiosClient from "../config/axiosClient";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usertAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await axiosClient("/users/profile", config);
        setAuth(data);
      } catch (error) {
        setAuth({});
      }

      setLoading(false);
    };

    usertAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export { AuthProvider };

export default AuthContext;
