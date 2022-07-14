import React, { useState } from "react";
import DeleteReward from "../reward - delete/DeleteReward";
import UpdateReward from "../reward - update/UpdateReward";
import Menu from "../../habit - reward/menu/Menu";
import DotsMenuButton from "../../habit - reward/menu buttons/DotsMenuButton";
import { MenuContainer } from "../../habit - reward/menu/Menu.styles";

const MenuReward = ({ reward }) => {
  const [showMenu, toggleShowMenu] = useState(false);

  const show = () => {
    toggleShowMenu(!showMenu);
  };

  return (
    <MenuContainer>
      {/*----- REWARD MENU BUTTON-----*/}
      <DotsMenuButton show={show} showMenu={showMenu} />

      {/*----- REWARD MENU -----*/}
      {showMenu && (
        <Menu show={show} reward="reward">
          {/*UPDATE REWARD*/}
          <UpdateReward
            reward={reward}
            show={show}
            toggleShowMenu={toggleShowMenu}
            showMenu={showMenu}
          />

          {/*DELETE REWARD*/}
          <DeleteReward
            reward={reward}
            show={show}
            toggleShowMenu={toggleShowMenu}
            showMenu={showMenu}
          />
        </Menu>
      )}
    </MenuContainer>
  );
};

export default MenuReward;
