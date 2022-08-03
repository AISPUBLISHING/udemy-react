import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContent from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonIsHighLighted, setButtonIsHighLighted] = useState(false);
  const ctx = useContext(CartContent);
  const numberOfItemInCart = ctx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClass = `${classes.button} ${
    buttonIsHighLighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (ctx.items.length === 0) {
      setButtonIsHighLighted(false);
    }
    setButtonIsHighLighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer)
    };
  }, [ctx.items]);

  return (
    <>
      <button className={btnClass} onClick={props.onClick}>
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
