import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const formSubmitHandler = (count) => {
    const mealCartItem = {
      count: count,
      name: props.name,
      price: props.price,
    };
    console.log("mealCartItem", mealCartItem);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
      <MealItemForm onFormSubmit={formSubmitHandler} />
    </li>
  );
};
export default MealItem;
