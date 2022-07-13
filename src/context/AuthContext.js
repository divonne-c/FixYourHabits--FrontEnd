import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [auth, toggleAuth] = useState({
    isAuth: false,
    user: null,
    status: "pending",
  });
  const [isMobile, setIsMobile] = useState(false);
  const [renderData, setRenderData] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = jwt_decode(token);
      getUserData(decoded.sub, token);
    } else {
      toggleAuth({
        isAuth: false,
        user: null,
        status: "done",
      });
    }
  }, []);

  async function getUserData(username, token) {
    try {
      const response = await axios.get(
        `http://localhost:8080/users/${username}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toggleAuth({
        ...auth,
        isAuth: true,
        user: {
          username: response.data.username,
          role: response.data.authorities[0].authority,
        },
        status: "done",
      });
    } catch (e) {
      console.error(e);
      toggleAuth({
        isAuth: false,
        user: null,
        status: "done",
      });
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    auth.isAuth && getUserData(auth.user.username, token);
    setRenderData(!renderData);
  }, [auth.isAuth]);

  function login(token) {
    const decodedToken = jwt_decode(token);

    localStorage.setItem("token", token);

    toggleAuth({
      isAuth: true,
      user: {
        username: decodedToken.sub,
      },
      status: "done",
    });
  }

  function logout() {
    localStorage.clear();
    toggleAuth({
      isAuth: false,
      user: null,
      status: "done",
    });
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1025) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  }, [auth]);

  useEffect(() => {
    if (
      auth.isAuth === true &&
      auth.user.role === "ROLE_USER" &&
      isMobile === true
    ) {
      navigate(`/home/${auth.user.username}/habits`);
    } else if (
      auth.isAuth === true &&
      auth.user.role === "ROLE_USER" &&
      isMobile === false
    ) {
      navigate(`/home/${auth.user.username}`);
    } else if (
      auth.isAuth === true &&
      auth.user.role === "ROLE_ADMIN" &&
      isMobile === true
    ) {
      navigate(`/admin/home/${auth.user.username}/habits`);
    } else if (
      auth.isAuth === true &&
      auth.user.role === "ROLE_ADMIN" &&
      isMobile === false
    ) {
      navigate(`/admin/home/${auth.user.username}`);
    } else {
      navigate("/auth/sign-in");
    }
  }, [auth, isMobile]);

  const value = {
    auth,
    toggleAuth,
    renderData,
    setRenderData,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {" "}
      {auth.status === "done" ? children : <p>Loading...</p>}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
