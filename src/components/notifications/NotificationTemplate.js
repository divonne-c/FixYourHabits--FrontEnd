import React from "react";
import { Message } from "./Notification.styles";
import NotificationColors from "../../helpers/notificationColors";

const NotificationTemplate = ({ error, show, type }) => {
  const notificationColor = NotificationColors(type);

  return (
    <Message>
      <div className={notificationColor}>
        <div className="container">
          <div className="message">
            {type === "success" ? (
              <>
                <span className="material-symbols-outlined">check_circle</span>
                <div>
                  <h4>Succes</h4>
                  <p>{error}</p>
                </div>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">error</span>
                <div>
                  <h4>Error</h4>
                  <p>{error}</p>
                </div>
              </>
            )}
          </div>
          <button type="button" onClick={show}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>
    </Message>
  );
};

export default NotificationTemplate;
