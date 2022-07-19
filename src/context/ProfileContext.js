import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const ProfileContext = createContext({});

function ProfileProvider({ children }) {
  const [userProfile, setUserProfile] = useState({});
  const [adminProfile, setAdminProfile] = useState({});
  const [adminRewards, setAdminRewards] = useState([]);
  const [adminHabits, setAdminHabits] = useState([]);
  const { auth, renderData, toggleAuth } = useContext(AuthContext);

  useEffect(() => {
    async function getAdminData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://localhost:8080/adminprofiles/${auth.user.username}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toggleAuth({
          ...auth,
          user: {
            username: response.data.user.username,
            role: response.data.user.authorities[0].authority,
            id: response.data.id,
          },
        });

        setAdminProfile(response.data);
      } catch (e) {
        console.error(e);
      }
    }

    auth.isAuth && auth.user.role !== "ROLE_USER" && getAdminData();
  }, [renderData]);

  useEffect(() => {
    async function getAdminData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`http://localhost:8080/adminrewards`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setAdminRewards(response.data);
      } catch (e) {
        console.error(e);
      }
    }

    auth.isAuth && getAdminData();
  }, [renderData]);

  useEffect(() => {
    async function getAdminData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`http://localhost:8080/adminhabits`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setAdminHabits(response.data);
      } catch (e) {
        console.error(e);
      }
    }

    auth.isAuth && getAdminData();
  }, [renderData]);

  useEffect(() => {
    async function getData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://localhost:8080/userprofiles/${auth.user.username}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toggleAuth({
          ...auth,
          user: {
            username: response.data.user.username,
            role: response.data.user.authorities[0].authority,
            id: response.data.id,
            email: response.data.user.email,
          },
        });

        setUserProfile(response.data);
      } catch (e) {
        console.error(e);
      }
    }

    auth.isAuth && auth.user.role !== "ROLE_ADMIN" && getData();
  }, [renderData]);

  const values = {
    userProfile,
    adminProfile,
    setAdminProfile,
    adminRewards,
    setAdminRewards,
    adminHabits,
  };

  return (
    <ProfileContext.Provider value={values}>{children}</ProfileContext.Provider>
  );
}

export default ProfileProvider;
