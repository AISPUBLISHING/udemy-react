import React, { useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";

const MealItemForm = () => {
  const [mealCount, setMealCount] = useState("1");

  const onButtonHandler = (event) => {
    event.preventDefault();
    console.log("meal count", mealCount);
  };

  const mealChangeHandler = (event) => {
    setMealCount(event.target.value);
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        value={+mealCount}
        onChange={mealChangeHandler}
        type="number"
        min="1"
        step="1"
      />
      <Button text="+ Add" onClick={onButtonHandler} />
    </form>
  );
};
export default MealItemForm;
