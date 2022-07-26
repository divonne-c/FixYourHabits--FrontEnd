import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import StatsCircle from "./StatsCircle";
import { Container } from "./StatsToday.styles";
import { Card } from "../../../styles - global/cards/CardHome";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../../styles - global/global/MediaQueryDisplay";

const StatsToday = () => {
  const [userHabits, setUserHabits] = useState([]);
  const { auth, renderData } = useContext(AuthContext);

  let totalCompleted = 0;

  userHabits.map((habit) => {
    if (habit.completed) {
      totalCompleted++;
    } else {
      return totalCompleted;
    }
  });

  const daypercentage = () => {
    if (userHabits) {
      if (userHabits.length <= 0) {
        return 0;
      } else {
        return Math.round((totalCompleted / userHabits.length) * 100);
      }
    }
  };

  useEffect(() => {
    async function getData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://localhost:8080/userprofiles/${auth.user.username}/userhabits`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUserHabits(response.data);
      } catch (e) {
        console.error(e);
      }
    }
    auth.isAuth && auth.user.role !== "ROLE_ADMIN" && getData();
  }, [renderData]);

  return (
    <Container>
      <h2 className="title">Today</h2>
      <Card>
        <div className="container">
          {/*CIRCLE PROGRESS*/}
          <DesktopWHeight>
            <StatsCircle progress={daypercentage()} size={70} />
          </DesktopWHeight>
          <MobileWHeight>
            <StatsCircle progress={daypercentage()} size={70} />
          </MobileWHeight>

          {/*CONTENT PROGRESS*/}
          <div className="today">
            <div className="today-content">
              <h2>{userHabits && userHabits.length}</h2>
              <p>Total</p>
            </div>
            <div className="today-content">
              <h2>{totalCompleted}</h2>
              <p>Completed</p>
            </div>
            <div className="today-content">
              <h2>{userHabits && userHabits.length - totalCompleted}</h2>
              <p>To Do</p>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default StatsToday;
