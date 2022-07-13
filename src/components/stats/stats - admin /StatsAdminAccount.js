import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { ProfileContext } from "../../../context/ProfileContext";
import { Container } from "../stats - account stats/StatsAccount.styles";
import StatsAccountTemplate from "../stats - account stats/StatsAccountTemplate";

const StatsAdminAccount = () => {
  const [users, setUsers] = useState([]);
  const [totalAdmins, setTotalAdmins] = useState([]);
  const [totalUsers, setTotalUsers] = useState([]);
  const { renderData, auth } = useContext(AuthContext);
  const { adminProfile } = useContext(ProfileContext);

  useEffect(() => {
    async function getAdminData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`http://localhost:8080/users`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (e) {
        console.error(e);
      }
    }

    auth.isAuth && auth.user.role !== "ROLE_USER" && getAdminData();
  }, [renderData]);

  useEffect(() => {
    setTotalAdmins([
      users.filter((user) => user.authorities[0].authority === "ROLE_ADMIN"),
    ]);

    setTotalUsers([
      users.filter((user) => user.authorities[0].authority === "ROLE_USER"),
    ]);
  }, [users, renderData]);

  return (
    <Container>
      <StatsAccountTemplate
        className="orange-dark"
        title="Total Habits"
        number={adminProfile.adminHabits && adminProfile.adminHabits.length}
      />

      <StatsAccountTemplate
        className="pink-dark"
        title="Total Rewards"
        number={adminProfile.adminRewards && adminProfile.adminRewards.length}
      />

      <StatsAccountTemplate
        className="pink-light"
        title="Total Admins"
        number={totalAdmins.length && totalAdmins[0].length}
      />

      <StatsAccountTemplate
        className="orange-light"
        title="Total Users"
        number={totalUsers.length && totalUsers[0].length}
      />
    </Container>
  );
};

export default StatsAdminAccount;
