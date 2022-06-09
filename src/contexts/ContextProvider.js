import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const navBarItemsState = {
  cart: false,
  chat: false,
  notification: false,
  userProfile: false,
};

export const ContextProvider = ({ children }) => {
  const [currentScreenSize, setCurrentScreenSize] = useState(undefined);
  const [toggleMenu, setToggleMenu] = useState(true);
  const [toggleNavbarItem, setToggleNavbarItem] = useState(navBarItemsState);
  const [toggleThemeSettings, setToggleThemeSettings] = useState(false);
  const [currentThemeMode, setCurrentThemeMode] = useState("Dark");
  const [currentThemeColor, setCurrentThemeColor] = useState("#03C9D7");

  const setThemeMode = (e) => {
    let themeMode = e.target.value;
    setCurrentThemeMode(themeMode);
    localStorage.setItem("themeMode", themeMode);
  };

  const setThemeColor = (color) => {
    let themeColor = color;
    setCurrentThemeColor(themeColor);
    localStorage.setItem("themeColor", themeColor);
  };

  const toggleOnClick = (clickedItem) => {
    setToggleNavbarItem({ ...navBarItemsState, [clickedItem]: true });
  };

  return (
    <StateContext.Provider
      value={{
        currentScreenSize,
        setCurrentScreenSize,
        toggleMenu,
        setToggleMenu,
        toggleNavbarItem,
        setToggleNavbarItem,
        toggleThemeSettings,
        setToggleThemeSettings,
        currentThemeMode,
        setCurrentThemeMode,
        currentThemeColor,
        setCurrentThemeColor,
        setThemeMode,
        setThemeColor,
        toggleOnClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
