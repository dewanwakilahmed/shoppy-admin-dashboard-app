import React, { useEffect } from "react";

// CSS
import "./NavbarComponent.style.css";

// React Icons
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

// Syncfusion Components
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// Components
import {
  CartComponent,
  ChatComponent,
  NotificationComponent,
  UserProfileComponent,
} from "./";

// Context API
import { useStateContext } from "../contexts/ContextProvider";

// Dummy Data
import avatar from "../data/avatar.jpg";

const NavButton = ({ title, color, toggleNavbarItem, dotColor, icon }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      className="navbutton"
      style={{ color }}
      type="button"
      onClick={() => toggleNavbarItem()}
    >
      <span className="navbutton-dot" style={{ backgroundColor: dotColor }} />
      {icon}
    </button>
  </TooltipComponent>
);

const NavbarComponent = () => {
  const {
    currentScreenSize,
    setCurrentScreenSize,
    currentThemeColor,
    isMenuActive,
    setIsMenuActive,
    toggleOnClick,
    isNavbarItemActive,
  } = useStateContext();

  useEffect(() => {
    const handleScreenResize = () => setCurrentScreenSize(window.innerWidth);
    window.addEventListener("resize", handleScreenResize);
    handleScreenResize();
    return () => window.removeEventListener("resize", handleScreenResize);
  }, [setCurrentScreenSize]);

  useEffect(() => {
    if (currentScreenSize <= 900) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  }, [currentScreenSize, setIsMenuActive]);

  const toggleActiveMenu = () => setIsMenuActive(!isMenuActive);
  return (
    <div className="navbar-component">
      <div className="navbar-menu-item-container">
        <NavButton
          title="Menu"
          color={currentThemeColor}
          toggleNavbarItem={toggleActiveMenu}
          icon={<AiOutlineMenu />}
        />
      </div>
      <div className="navbar-all-other-items-container">
        <NavButton
          title="Cart"
          color={currentThemeColor}
          toggleNavbarItem={() => toggleOnClick("cart")}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          color={currentThemeColor}
          toggleNavbarItem={() => toggleOnClick("chat")}
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          color={currentThemeColor}
          toggleNavbarItem={() => toggleOnClick("notification")}
          dotColor="rgb(254, 201, 15)"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="User Profile" position="BottomCenter">
          <div
            className="user-profile-navbar-item"
            onClick={() => toggleOnClick("userProfile")}
          >
            <img className="user-profile-img" src={avatar} alt="User Profile" />

            <p className="user-profile-title">
              <span>Hi,</span>{" "}
              <span className="user-profile-name">Michael</span>
            </p>

            <MdKeyboardArrowDown className="user-profile-icon" />
          </div>
        </TooltipComponent>

        {isNavbarItemActive.cart && <CartComponent />}
        {isNavbarItemActive.chat && <ChatComponent />}
        {isNavbarItemActive.notification && <NotificationComponent />}
        {isNavbarItemActive.userProfile && <UserProfileComponent />}
      </div>
    </div>
  );
};

export default NavbarComponent;
