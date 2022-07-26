import React, { useContext, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import DiscoverAllContent from "./DiscoverAllContent";
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
import { DiscoverStyles, Filter } from "./Discover.styles";
import {
  ButtonFourth,
  ButtonSecondary,
} from "../../styles - global/global/ButtonStyles";

const DiscoverAll = () => {
  const [filteredHabits, setFilteredHabits] = useState([]);
  const [showModal, toggleShowModal] = useState(false);
  const { adminHabits } = useContext(ProfileContext);

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
              {/*HABITS*/}
              <DiscoverAllContent
                adminHabits={adminHabits}
                filteredHabits={filteredHabits}
              />

              {/*FILTER*/}
              <Filter>
                <h1>Filter</h1>
                <HabitTypeFilter
                  setFilteredHabits={setFilteredHabits}
                  habits={adminHabits}
                />
              </Filter>
            </InnerContentLayout3>
          </DiscoverStyles>
        </DesktopWHeight>

        {/*------- MOBILE --------*/}
        <MobileWHeight>
          <CardContentMobile>
            <DiscoverStyles>
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
                      habits={adminHabits}
                    />
                  </Filter>
                  <div className="cancel-button">
                    <ButtonFourth onClick={show}>Cancel</ButtonFourth>
                  </div>
                </Modal>
              )}

              {/*HABITS*/}
              <DiscoverAllContent
                adminHabits={adminHabits}
                filteredHabits={filteredHabits}
              />
            </DiscoverStyles>
          </CardContentMobile>
        </MobileWHeight>
      </InnerContentLayout2>
    </ContentLayout>
  );
};

export default DiscoverAll;
