import classes from "./MealItem.module.css";
import React from "react";
import Card from "./UI/Card";
import Input from "./UI/Input";

const MealItem = (props) => {
  return (
    <Card className={classes.meal}>
      <h3>{props.name}</h3>
      <p className={classes.description}>{props.description}</p>
      <p className={classes.price}>{props.price}</p>
      <Input label="Amount" type="number" />
    </Card>
  );
};
export default MealItem;
