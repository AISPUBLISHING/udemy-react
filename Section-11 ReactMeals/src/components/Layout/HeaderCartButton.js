import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContent from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContent);
  const numberOfItemInCart = ctx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItemInCart}</span>
      </button>
    </>
  );
};
export default HeaderCartButton;
