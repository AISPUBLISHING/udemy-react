import classes from "./Cart.module.css";
// import CartItem from "./CartItem"
import Model from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "m1",
          name: "Sushi",
          description: "Finest fish and veggies",
          price: 22.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Model onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amounts</span>
        <span>344</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};
export default Cart;
