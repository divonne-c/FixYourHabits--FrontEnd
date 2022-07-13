import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import NotificationTemplate from "./NotificationTemplate";

const Notification = () => {
  const [showError, toggleShowError] = useState(true);
  const { notifications, setNotifications, renderData } =
    useContext(AuthContext);
  let keynumber = 0;

  const show = () => {
    toggleShowError(!showError);
    setNotifications([]);
  };

  useEffect(() => {
    setNotifications([]);
  }, []);

  useEffect(() => {
    if (notifications.length < 1) {
      toggleShowError(true);
    }
  }, [notifications]);

  return (
    <div>
      {showError &&
        notifications &&
        notifications.map((error) => {
          return (
            <div key={keynumber++}>
              <NotificationTemplate
                error={error.message}
                show={show}
                type={error.type}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Notification;
