import React, { useState } from "react";
import UpdateHabit from "../habit - update/UpdateHabit";
import DeleteHabits from "../habit - delete/DeleteHabits";
import Menu from "../../habit - reward/menu/Menu";
import DotsMenuButton from "../../habit - reward/menu buttons/DotsMenuButton";
import { MenuContainer } from "../../habit - reward/menu/Menu.styles";

const MenuHabit = ({ habit, role }) => {
  const [showMenu, toggleShowMenu] = useState(false);

  const show = () => {
    toggleShowMenu(!showMenu);
  };

  return (
    <MenuContainer>
      {/*----- HABIT MENU BUTTON-----*/}
      <DotsMenuButton show={show} showMenu={showMenu} />

      {/*----- HABIT MENU -----*/}
      {showMenu && (
        <Menu show={show}>
          {/*UPDATE HABIT*/}
          <UpdateHabit
            habit={habit}
            role={role}
            toggleShowMenu={toggleShowMenu}
            showMenu={showMenu}
            show={show}
          />

          {/*DELETE HABIT*/}
          <DeleteHabits
            role={role}
            id={habit.id}
            toggleShowMenu={toggleShowMenu}
            showMenu={showMenu}
            show={show}
          />
        </Menu>
      )}
    </MenuContainer>
  );
};

export default MenuHabit;
