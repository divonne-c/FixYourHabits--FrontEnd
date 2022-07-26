import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import Banner from "../../components/banner/Banner";
import habitColorFunction from "../../helpers/habitcolors";
import habitLogoFunction from "../../helpers/habitlogos";
import SlideButtons from "../../components/slide buttons/SlideButtons";
import GetDiscoverHabitTemplate from "../../components/habits/habit - get/GetDiscoverHabitTemplate";
import { Container } from "../../components/habits/habit - filter/HabitTypeFilter.styles";
import { DiscoverStyles } from "./Discover.styles";

const DiscoverMainContent = () => {
  const [newHabits, setNewHabits] = useState([]);
  const [healthHabits, setHealthHabits] = useState([]);
  const [randomHabits, setRandomHabits] = useState([]);
  const [mindHabits, setMindHabits] = useState([]);
  const { adminHabits } = useContext(ProfileContext);

  useEffect(() => {
    //  NEW
    setNewHabits(adminHabits.slice(-20));

    // HEALTH
    setHealthHabits(
      adminHabits.filter((habit) => habit.type === "health").slice(-20)
    );

    // RANDOM
    function getMultipleRandom(arr, num) {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    }
    setRandomHabits(getMultipleRandom(adminHabits, 20));

    // MIND
    setMindHabits(
      adminHabits.filter((habit) => habit.type === "mind").slice(-20)
    );
  }, [adminHabits]);

  return (
    <DiscoverStyles>
      {/*BANNER*/}
      <Banner />

      {/*NEW*/}
      <div>
        <h2>New</h2>
        <SlideButtons classname="new" />
        <Container>
          <div className="discover-main new">
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
        <SlideButtons classname="discover-health" />
        <Container>
          <div className="discover-main discover-health">
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

      {/*RANDOM*/}
      <div>
        <h2>You may also like</h2>
        <SlideButtons classname="random" />
        <Container>
          <div className="discover-main random">
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
        <SlideButtons classname="discover-mind" />
        <Container>
          <div className="discover-main discover-mind">
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
