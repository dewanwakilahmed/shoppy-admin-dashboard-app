import React from "react";

// Context API
import { useStateContext } from "../contexts/ContextProvider";

const ButtonComponent = ({
  icon,
  text,
  backgroundColor,
  color,
  borderRadius,
  size,
  width,
  bgHoverColor,
}) => {
  const { setIsNavbarItemActive, navbarItemsState } = useStateContext();

  const btnCSS = `w-${width} p-3 text-${size} hover:bg-${bgHoverColor} hover:drop-shadow-xl`;

  return (
    <button
      className={`button-component ${btnCSS}`}
      style={{ backgroundColor, color, borderRadius }}
      type="submit"
      onClick={() => setIsNavbarItemActive(navbarItemsState)}
    >
      {icon} {text}
    </button>
  );
};

export default ButtonComponent;
