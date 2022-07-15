import React, { useState } from "react";
import GetFilteredHabits from "../../components/habits/habit - filter/GetFilteredHabits";
import HabitTypeFilter from "../../components/habits/habit - filter/HabitTypeFilter";
import Modal from "../../components/modals/modal - normal/Modal";
import DiscoverNavigation from "../../components/navigations/DiscoverNavigation";
import {
  ContentLayout,
  InnerContentLayout2,
  InnerContentLayout3,
} from "../../styles - global/global/LayoutStyles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";
import { DiscoverMobile, DiscoverStyles, Filter } from "./Discover.styles";
import {
  ButtonFourth,
  ButtonSecondary,
} from "../../styles - global/global/ButtonStyles";

const DiscoverAll = () => {
  const [habits, setHabits] = useState([]);
  const [showModal, toggleShowModal] = useState(false);
  const [filteredHabits, setFilteredHabits] = useState([]);

  const show = () => {
    toggleShowModal(!showModal);
  };

  return (
    <ContentLayout>
      <InnerContentLayout2>
        <DiscoverNavigation />

        {/*------- DESKTOP --------*/}
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

        {/*------- MOBILE --------*/}
        <MobileWHeight>
          <CardContentMobile>
            <DiscoverMobile>
              {/*FILTER*/}
              <div className="filter-container">
                <ButtonSecondary
                  type="button"
                  onClick={show}
                  className="filter-button"
                >
                  <span className="material-symbols-outlined">filter_alt</span>
                  <p>Filter</p>
                </ButtonSecondary>
              </div>
              {showModal && (
                <Modal title="Filter">
                  <Filter>
                    <HabitTypeFilter
                      setFilteredHabits={setFilteredHabits}
                      habits={habits}
                    />
                  </Filter>
                  <ButtonFourth onClick={show}>Cancel</ButtonFourth>
                </Modal>
              )}

              {/*HABITS*/}
              <GetFilteredHabits
                habits={habits}
                setHabits={setHabits}
                filteredHabits={filteredHabits}
                setFilteredHabits={setFilteredHabits}
              />
            </DiscoverMobile>
          </CardContentMobile>
        </MobileWHeight>
      </InnerContentLayout2>
    </ContentLayout>
  );
};

export default DiscoverAll;
