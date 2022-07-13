import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import Navigation from "./components/navigations/Navigation";
import CreateUserReward from "./components/rewards/reward - create/CreateUserReward";
import Notification from "./components/notifications/Notification";
import GlobalStyles from "./styles - global/global/GlobalStyles";
import { GlobalLayout } from "./styles - global/global/LayoutStyles";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <GlobalStyles />

      <GlobalLayout>
        {/*Navigation*/}
        <Navigation />

        {/*Notifications*/}
        {auth.isAuth && <Notification />}

        {/*Rewards*/}
        {auth.isAuth && <CreateUserReward />}

        {/*Routes*/}
        <AppRoutes />
      </GlobalLayout>
    </>
  );
}

export default App;
