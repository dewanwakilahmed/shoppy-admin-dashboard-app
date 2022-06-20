import React from "react";

// CSS
import "./ChatComponent.style.css";

// React Icons
import { MdOutlineCancel } from "react-icons/md";

// Components
import ButtonComponent from "./ButtonComponent";

// Context API
import { useStateContext } from "../contexts/ContextProvider";

// Dummy Data
import { chatData } from "../data/dummy";

const ChatComponent = () => {
  const { currentThemeColor } = useStateContext();

  return (
    <div className="chat-component">
      <div className="chat-header">
        <div className="chat-header-title-info">
          <p className="chat-header-title">Messages</p>

          <button className="new-messages-btn" type="button">
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

      <div className="chat-body">
        {chatData.map((item, index) => (
          <div className="chat-item" key={index}>
            <div className="chat-user">
              <img
                src={item.image}
                alt={item.message}
                className="chat-user-img"
              />

              <span
                className="user-online-status"
                style={{ background: item.dotColor }}
              />
            </div>

            <div className="chat-content">
              <p className="chat-msg">{item.message}</p>
              <p className="chat-desc">{item.desc}</p>
              <p className="chat-time">{item.time}</p>
            </div>
          </div>
        ))}

        <div className="chat-btn-container">
          <ButtonComponent
            text="See all messages"
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

export default ChatComponent;
