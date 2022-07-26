import React, { useContext } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Home from "../pages/home/home - user/Home";
import HomeHabits from "../pages/home/home - user/mobile/HomeHabits";
import HomeScores from "../pages/home/home - user/mobile/HomeScores";
import HomeAdmin from "../pages/home/home-admin/HomeAdmin";
import HomeAdminHabits from "../pages/home/home-admin/mobile/HomeAdminHabits";
import HomeAdminScores from "../pages/home/home-admin/mobile/HomeAdminScores";
import DiscoverMain from "../pages/discover/DiscoverMain";
import DiscoverAll from "../pages/discover/DiscoverAll";
import SettingsAccount from "../pages/settings/SettingsAccount";
import SettingsSecurity from "../pages/settings/SettingsSecurity";
import HelpFaqAccount from "../pages/help/HelpFaqAccount";
import HelpFaqRewards from "../pages/help/HelpFaqRewards";
import HelpFaqHabits from "../pages/help/HelpFaqHabits";
import HelpContact from "../pages/help/HelpContact";
import SignIn from "../pages/login/SignIn";
import CreateAccount from "../pages/login/CreateAccount";

const AppRoutes = () => {
  const { auth } = useContext(AuthContext);
  // const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/home/:userId">
        <Route
          path=""
          element={auth.isAuth ? <Home /> : <Navigate to="/auth/sign-in" />}
        />
        <Route path="habits" element={<HomeHabits />} />
        <Route path="scores" element={<HomeScores />} />
      </Route>

      <Route path="/admin/home/:userId">
        <Route
          path=""
          element={
            auth.isAuth ? <HomeAdmin /> : <Navigate to="/auth/sign-in" />
          }
        />
        <Route path="habits" element={<HomeAdminHabits />} />
        <Route path="scores" element={<HomeAdminScores />} />
      </Route>

      {/*Discover*/}
      <Route path="/discover">
        <Route
          path=""
          element={
            auth.isAuth ? (
              <Navigate to="main" />
            ) : (
              <Navigate to="/auth/sign-in" />
            )
          }
        />
        <Route path="main" element={<DiscoverMain />} />
        <Route path="all" element={<DiscoverAll />} />
      </Route>

      {/*Settings*/}
      <Route path="/settings">
        <Route
          path=""
          element={
            auth.isAuth ? (
              <Navigate to="account" />
            ) : (
              <Navigate to="/auth/sign-in" />
            )
          }
        />
        <Route path="account" element={<SettingsAccount />} />
        <Route path="security" element={<SettingsSecurity />} />
      </Route>

      {/*Help*/}
      <Route path="/help">
        <Route path="" element={<Navigate to="faq" />} />
        <Route path="faq">
          <Route path="" element={<Navigate to="account" />} />
          <Route path="account" element={<HelpFaqAccount />} />
          <Route path="rewards" element={<HelpFaqRewards />} />
          <Route path="habits" element={<HelpFaqHabits />} />
        </Route>
        <Route path="contact" element={<HelpContact />} />
      </Route>

      {/*Sign in*/}
      <Route path="/auth">
        <Route path="" element={<Navigate to="sign-in" />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="create-account" element={<CreateAccount />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
