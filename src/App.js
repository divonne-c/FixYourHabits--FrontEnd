import { useContext } from "react";
import Navigation from "./components/navigations/Navigation";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import GlobalStyles from "./styles - global/global/GlobalStyles";
import { GlobalLayout } from "./styles - global/global/LayoutStyles";
import Home from "./pages/home/home - user/desktop/Home";
import PageNotFound from "./pages/errorpage/PageNotFound";
import SignIn from "./pages/login/SignIn";
import DiscoverAll from "./pages/discover/DiscoverAll";
import DiscoverMain from "./pages/discover/DiscoverMain";
import SettingsAccount from "./pages/settings/SettingsAccount";
import SettingsSecurity from "./pages/settings/SettingsSecurity";
import HelpContact from "./pages/help/HelpContact";
import CreateAccount from "./pages/login/CreateAccount";
import HelpFaqAccount from "./pages/help/HelpFaqAccount";
import HelpFaqRewards from "./pages/help/HelpFaqRewards";
import HelpFaqHabits from "./pages/help/HelpFaqHabits";
import { AuthContext } from "./context/AuthContext";
import HomeHabits from "./pages/home/home - user/mobile/HomeHabits";
import HomeScores from "./pages/home/home - user/mobile/HomeScores";
import HomeAdmin from "./pages/home/home-admin/HomeAdmin";

function App() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      {/*Global discover - styles - global*/}
      <GlobalStyles />

      <GlobalLayout>
        {/*Navigation*/}
        <Navigation />

        {/*Routes*/}
        <Routes>
          <Route path="/home/:userId">
            <Route
              path=""
              element={auth.isAuth ? <Home /> : <Navigate to="/auth/sign-in" />}
            />
            <Route path="habits" element={<HomeHabits />} />
            <Route path="scores" element={<HomeScores />} />
          </Route>

          <Route path="/admin/home/:userId" element={<HomeAdmin />} />

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

          {/*/!*    Error moet laatste zijn in routes *!/*/}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </GlobalLayout>
    </>
  );
}

export default App;
