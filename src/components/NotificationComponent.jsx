import React from "react";

// CSS
import "./NotificationComponent.style.css";

// React Icons
import { MdOutlineCancel } from "react-icons/md";

// Components
import ButtonComponent from "./ButtonComponent";

// Context API
import { useStateContext } from "../contexts/ContextProvider";

// Dummy Data
import { chatData } from "../data/dummy";

const NotificationComponent = () => {
  const { currentThemeColor } = useStateContext();

  return (
    <div className="notification-component">
      <div className="notification-header">
        <div className="notification-header-title-info">
          <p className="notification-header-title">Notifications</p>

          <button className="new-notifications-count" type="button">
            5 New
          </button>
        </div>

        <ButtonComponent
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          borderRadius="50%"
          size="2xl"
          bgHoverColor="light-gray"
        />
      </div>

      <div className="notification-body">
        {chatData.map((item, index) => (
          <div className="notification-item" key={index}>
            <img
              src={item.image}
              alt={item.message}
              className="notification-user-img"
            />

            <div className="notification-content">
              <p className="notification-msg">{item.message}</p>
              <p className="notification-desc">{item.desc}</p>
            </div>
          </div>
        ))}

        <div className="notification-btn-container">
          <ButtonComponent
            text="See all notifications"
            backgroundColor={currentThemeColor}
            color="white"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;
