import React, { useContext, useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import { Container } from "../../components/habits/habit - filter/GetFilteredHabits.styles";
import habitColorFunction from "../../helpers/habitcolors";
import habitLogoFunction from "../../helpers/habitlogos";
import GetDiscoverHabitTemplate from "../../components/habits/habit - get/GetDiscoverHabitTemplate";

import { ProfileContext } from "../../context/ProfileContext";
import { DiscoverStyles } from "./Discover.styles";

const DiscoverMainContent = () => {
  const [newHabits, setNewHabits] = useState([]);
  const [healthHabits, setHealthHabits] = useState([]);
  const [randomHabits, setRandomHabits] = useState([]);
  const [mindHabits, setmindHabits] = useState([]);
  const { adminHabits } = useContext(ProfileContext);

  useEffect(() => {
    //  NEW
    setNewHabits(adminHabits.slice(-4));

    // HEALTH
    setHealthHabits(
      adminHabits.filter((habit) => habit.type === "health").slice(-4)
    );

    // RANDOM
    function getMultipleRandom(arr, num) {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    }
    setRandomHabits(getMultipleRandom(adminHabits, 4));

    // MIND
    setmindHabits(
      adminHabits.filter((habit) => habit.type === "mind").slice(-4)
    );
  }, [adminHabits]);

  return (
    <DiscoverStyles>
      {/*BANNER*/}
      <Banner />

      {/*NEW*/}
      <div>
        <h2>New</h2>
        <Container>
          <div className="discover-main">
            {newHabits &&
              newHabits.map((habit) => {
                const habitColor = habitColorFunction(habit.type);
                const habitLogo = habitLogoFunction(habit.type);
                return (
                  <div key={habit.id}>
                    <GetDiscoverHabitTemplate
                      habit={habit}
                      habitLogo={habitLogo}
                      habitColor={habitColor}
                    />
                  </div>
                );
              })}
          </div>
        </Container>
      </div>

      {/*HEALTH*/}
      <div>
        <h2>All about health</h2>
        <Container>
          <div className="discover-main">
            {healthHabits &&
              healthHabits.map((habit) => {
                const habitColor = habitColorFunction(habit.type);
                const habitLogo = habitLogoFunction(habit.type);

                return (
                  <div key={habit.id}>
                    <GetDiscoverHabitTemplate
                      habit={habit}
                      habitLogo={habitLogo}
                      habitColor={habitColor}
                    />
                  </div>
                );
              })}
          </div>
        </Container>
      </div>

      {/*HEALTH*/}
      <div>
        <h2>You may also like</h2>
        <Container>
          <div className="discover-main">
            {randomHabits &&
              randomHabits.map((habit) => {
                const habitColor = habitColorFunction(habit.type);
                const habitLogo = habitLogoFunction(habit.type);

                return (
                  <div key={habit.id}>
                    <GetDiscoverHabitTemplate
                      habit={habit}
                      habitLogo={habitLogo}
                      habitColor={habitColor}
                    />
                  </div>
                );
              })}
          </div>
        </Container>
      </div>

      {/*MIND*/}
      <div>
        <h2>Focus on your mind</h2>
        <Container>
          <div className="discover-main">
            {mindHabits &&
              mindHabits.map((habit) => {
                const habitColor = habitColorFunction(habit.type);
                const habitLogo = habitLogoFunction(habit.type);

                return (
                  <div key={habit.id}>
                    <GetDiscoverHabitTemplate
                      habit={habit}
                      habitLogo={habitLogo}
                      habitColor={habitColor}
                    />
                  </div>
                );
              })}
          </div>
        </Container>
      </div>
    </DiscoverStyles>
  );
};

export default DiscoverMainContent;
