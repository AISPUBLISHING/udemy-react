import React from "react";
import classes from "./MealItem.module.css";
import Card from "../UI/Card";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <Card className={classes.meal}>
      <h3>{props.name}</h3>
      <p className={classes.description}>{props.description}</p>
      <p className={classes.price}>{props.price}</p>
      <MealItemForm />
    </Card>
  );
};
export default MealItem;
