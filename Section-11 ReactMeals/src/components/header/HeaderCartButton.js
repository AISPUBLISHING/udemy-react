import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";

const HeaderCartButton = () => {
  return (
    <>
      <CartIcon />
      <button className={classes.button}>Your Cart</button>
    </>
  );
};
export default HeaderCartButton;
