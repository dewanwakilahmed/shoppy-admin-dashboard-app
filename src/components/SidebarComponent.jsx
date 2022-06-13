import React from "react";

import { Link, NavLink } from "react-router-dom";

// CSS
import "./SidebarComponent.style.css";

// React Icons
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";

// Syncfusion Components
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// Context API
import { useStateContext } from "../contexts/ContextProvider";

// Dummy Data
import { links } from "../data/dummy";

const SidebarComponent = () => {
  const {
    currentThemeColor,
    isMenuActive,
    setIsMenuActive,
    currentScreenSize,
  } = useStateContext();

  const handleCloseSidebar = () => {
    if (isMenuActive !== undefined && currentScreenSize <= 900) {
      setIsMenuActive(false);
    }
  };

  return (
    <div className="sidebar-component">
      {isMenuActive && (
        <>
          <div className="sidebar-header">
            <Link className="app-title" to="/" onClick={handleCloseSidebar}>
              <SiShopware /> <span>Shoppy</span>
            </Link>

            <TooltipComponent content="Close Sidebar" position="BottomCenter">
              <button
                className="close-sidebar-btn"
                type="button"
                onClick={() => setIsMenuActive(!isMenuActive)}
                style={{ color: currentThemeColor }}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="sidebar-links">
            {links.map((item) => (
              <div className="sidebar-link-item" key={item.title}>
                <p className="sidebar-link-title">{item.title}</p>

                {item.links.map((link) => (
                  <NavLink
                    className="sidebar-link"
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentThemeColor : "",
                    })}
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SidebarComponent;
