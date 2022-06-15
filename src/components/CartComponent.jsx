import React from "react";

// CSS
import "./CartComponent.style.css";

// React Icons
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// Components
import ButtonComponent from "./ButtonComponent";

// Context API
import { useStateContext } from "../contexts/ContextProvider";

// Dummy Data
import { cartData } from "../data/dummy";

const CartComponent = () => {
  const { currentThemeColor } = useStateContext();

  return (
    <div className="cart-component">
      <div className="cart-component-content">
        <div className="cart-header">
          <p className="cart-header-title">Shopping Cart</p>

          <ButtonComponent
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            borderRadius="50%"
            size="2xl"
            bgHoverColor="light-gray"
          />
        </div>

        {cartData.map((item, index) => (
          <div key={index} className="cart-item-container">
            <div className="cart-item-content">
              <div className="cart-item">
                <img src={item.image} alt="" className="cart-item-img" />

                <div className="cart-item-details">
                  <p className="cart-item-title">{item.name}</p>
                  <p className="cart-item-category">{item.category}</p>

                  <div className="cart-item-cost">
                    <p className="cart-item-price">{item.price}</p>

                    <div className="cart-item-amount-container">
                      <p className="cart-item-amount-remove">
                        <AiOutlineMinus />
                      </p>
                      <p className="cart-item-amount">0</p>
                      <p className="cart-item-amount-add">
                        <AiOutlinePlus />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="cart-total-amount-container">
          <div className="cart-subtotal-container">
            <p className="cart-subtotal-title">Sub Total</p>
            <p className="cart-subtotal-amount">$890</p>
          </div>

          <div className="cart-total-container">
            <p className="cart-total-title">Total</p>
            <p className="cart-total-amount">$890</p>
          </div>
        </div>

        <div className="cart-button-container">
          <ButtonComponent
            color="white"
            backgroundColor={currentThemeColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
