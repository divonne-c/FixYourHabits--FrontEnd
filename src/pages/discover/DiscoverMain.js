import React, { useContext, useEffect, useState } from "react";
import DiscoverNavigation from "../../components/navigations/DiscoverNavigation";
import {
  ContentLayout,
  InnerContentLayout2,
} from "../../styles - global/global/LayoutStyles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import {
  Desktop,
  DesktopWHeight,
  Mobile,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";
import { Banner, DiscoverStyles, Habits } from "./Discover.styles";
import banner from "../../assets/banner2.webp";
import { ProfileContext } from "../../context/ProfileContext";
import { HabitColorStyle } from "../../components/habits/habit - get/GetHabits.styles";
import {
  Container,
  Element,
  ElementMobile,
} from "../../components/habits/habit - filter/GetFilteredHabits.styles";
import AddHabitModal from "../../components/habits/habit - add discover/AddHabitModal";
import { AuthContext } from "../../context/AuthContext";
import habitColorFunction from "../../helpers/habitcolors";
import habitLogoFunction from "../../helpers/habitlogos";
import GetDiscoverHabitTemplate from "../../components/habits/habit - get/GetDiscoverHabitTemplate";

const DiscoverMain = () => {
  const [newHabits, setNewHabits] = useState([]);
  const [healthHabits, setHealthHabits] = useState([]);
  const { auth } = useContext(AuthContext);
  const { adminHabits } = useContext(ProfileContext);

  useEffect(() => {
    setNewHabits(adminHabits.slice(-4));
    setHealthHabits(
      adminHabits.filter((habit) => habit.type === "health").slice(-4)
    );
  }, [adminHabits]);

  return (
    <ContentLayout>
      <InnerContentLayout2>
        <DiscoverNavigation />

        {/*------- DesktopWHeight --------*/}
        <DesktopWHeight>
          <DiscoverStyles>
            {/*BANNER*/}
            <Banner>
              <img src={banner} alt="orange banner" />
              <div className="banner-text">
                <h1>Make a difference</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corporis, laboriosam!
                </p>
              </div>
            </Banner>

            {/*NEW*/}
            <div>
              <h2>New</h2>
              <Container>
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
              </Container>
            </div>

            {/*HEALTH*/}
            <div>
              <h2>All about health</h2>
              <Container>
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
              </Container>
            </div>
          </DiscoverStyles>
        </DesktopWHeight>

        {/*------- MobileWHeight --------*/}
        <MobileWHeight>
          <CardContentMobile>
            <DiscoverStyles>
              <Banner>
                <img src={banner} alt="orange banner" />
                <div className="banner-text">
                  <h1>Make a difference</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, laboriosam!
                  </p>
                </div>
              </Banner>

              {/*NEW*/}
              <div>
                <h2>New</h2>
                <Habits>
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
                </Habits>
              </div>

              {/*HEALTH*/}
              <div>
                <h2>All about health</h2>
                <Habits>
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
                </Habits>
              </div>
            </DiscoverStyles>
          </CardContentMobile>
        </MobileWHeight>
      </InnerContentLayout2>
    </ContentLayout>
  );
};

export default DiscoverMain;
