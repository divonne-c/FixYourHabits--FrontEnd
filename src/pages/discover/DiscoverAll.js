import React, { useState } from "react";
import {
  ContentLayout,
  InnerContentLayout2,
  InnerContentLayout3,
} from "../../styles - global/global/LayoutStyles";
import DiscoverNavigation from "../../components/navigations/DiscoverNavigation";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";
import { DiscoverStyles, Filter } from "./Discover.styles";
import GetFilteredHabits from "../../components/habits/habit - filter/GetFilteredHabits";
import HabitTypeFilter from "../../components/habits/habit - filter/HabitTypeFilter";

const DiscoverAll = () => {
  const [habits, setHabits] = useState([]);
  const [filteredHabits, setFilteredHabits] = useState([]);

  return (
    <ContentLayout>
      <InnerContentLayout2>
        <DiscoverNavigation />

        {/*------- DesktopWHeight --------*/}
        <DesktopWHeight>
          <DiscoverStyles>
            <InnerContentLayout3>
              <GetFilteredHabits
                habits={habits}
                setHabits={setHabits}
                filteredHabits={filteredHabits}
                setFilteredHabits={setFilteredHabits}
              />
              <Filter>
                <h1>Filter</h1>
                <HabitTypeFilter
                  setFilteredHabits={setFilteredHabits}
                  habits={habits}
                />
              </Filter>
            </InnerContentLayout3>
          </DiscoverStyles>
        </DesktopWHeight>

        {/*------- MobileWHeight --------*/}
        <MobileWHeight>
          <CardContentMobile>
            <p>Discover all</p>
          </CardContentMobile>
        </MobileWHeight>
      </InnerContentLayout2>
    </ContentLayout>
  );
};

export default DiscoverAll;
