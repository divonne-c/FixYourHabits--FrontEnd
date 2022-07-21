import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LogoutButton,
  NavigationDesktop,
  NavigationElement,
  NavigationLink,
  NavigationLogo,
  NavigationMobile,
} from "../../styles - global/global/NavigationStyles";
import {
  Desktop,
  Mobile,
} from "../../styles - global/global/MediaQueryDisplay";
import { AuthContext } from "../../context/AuthContext";
import CreateHabit from "../habits/habit - create/CreateHabit";
import ModalSmall from "../modals/modal - small/ModalSmall";
import {
  ButtonFourth,
  ButtonThird,
} from "../../styles - global/global/ButtonStyles";
import { CreateHabitButton } from "../habits/habit - create/CreateHabit.styles";

const Navigation = () => {
  const [showMenu, toggleShowMenu] = useState(false);
  const { auth, logout } = useContext(AuthContext);

  const show = () => {
    toggleShowMenu(!showMenu);
  };
  return (
    <>
      {/*------- DesktopWHeight --------*/}
      <Desktop>
        <NavigationDesktop>
          <div>
            {/*Logo*/}
            <NavigationLogo>
              <span className="material-symbols-outlined">task_alt</span>
              <h2>Fix Your Habits</h2>
            </NavigationLogo>

            {/*--------- Authenticated --------*/}
            {auth.isAuth && (
              <NavigationElement>
                {/*Home*/}
                <NavigationLink
                  to={
                    auth.isAuth && auth.user.role === "ROLE_USER"
                      ? `/home/${auth.user.username}`
                      : auth.isAuth && `/admin/home/${auth.user.username}`
                  }
                >
                  <span className="material-symbols-outlined">home</span>
                  <p>Home</p>
                </NavigationLink>

                {/*Discover*/}
                <NavigationLink to="/discover">
                  <span className="material-symbols-outlined">explore</span>
                  <p>Discover</p>
                </NavigationLink>

                {/*Settings*/}
                <NavigationLink to="/settings">
                  <span className="material-symbols-outlined">settings</span>
                  <p>Settings</p>
                </NavigationLink>
              </NavigationElement>
            )}
          </div>

          {/*--------- Not Authenticated --------*/}
          <NavigationElement>
            {/*HelpFaq*/}
            <NavigationLink to="/help">
              <span className="material-symbols-outlined">help</span>
              <p>Help</p>
            </NavigationLink>

            {/*Sign out*/}
            {auth.isAuth ? (
              <>
                <LogoutButton type="button" onClick={show}>
                  <span className="material-symbols-outlined">logout</span>
                  <p>Sign Out</p>
                </LogoutButton>
                {showMenu && (
                  <ModalSmall>
                    <div className="modal-container">
                      <p>Would you like to sign out?</p>
                      <div className="button-container">
                        <ButtonFourth onClick={show}>Cancel</ButtonFourth>
                        <ButtonThird
                          onClick={() => {
                            show();
                            logout();
                          }}
                        >
                          Sign out
                        </ButtonThird>
                      </div>
                    </div>
                  </ModalSmall>
                )}
              </>
            ) : (
              <NavigationLink to="/auth">
                <span className="material-symbols-outlined">login</span>
                <p>Sign In</p>
              </NavigationLink>
            )}
          </NavigationElement>
        </NavigationDesktop>
      </Desktop>

      {/*------- MobileWHeight --------*/}
      <Mobile>
        <NavigationMobile>
          {/*Home*/}
          <NavLink
            to={
              auth.isAuth && auth.user.role === "ROLE_USER"
                ? `/home/${auth.user.username}/habits`
                : auth.isAuth && `/admin/home/${auth.user.username}/habits`
            }
          >
            <span className="material-symbols-outlined">home</span>
          </NavLink>

          {/*Discover*/}
          <NavLink to="/discover">
            <span className="material-symbols-outlined">explore</span>
          </NavLink>

          {/*Add habit button*/}

          <CreateHabit
            role={
              auth.isAuth && auth.user.role === "ROLE_USER" ? "user" : "admin"
            }
            profile={
              auth.isAuth && auth.user.role === "ROLE_USER"
                ? "userProfile"
                : "adminProfile"
            }
          />

          {/*Settings*/}
          <NavLink to="/settings">
            <span className="material-symbols-outlined">settings</span>
          </NavLink>

          {/*HelpFaq*/}
          <NavLink to="/help">
            <span className="material-symbols-outlined">help</span>
          </NavLink>
        </NavigationMobile>
      </Mobile>
    </>
  );
};

export default Navigation;
