import React, { useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";

const MealItemForm = (props) => {
  const [mealCount, setMealCount] = useState("1");

  const onButtonHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(mealCount);
  };

  const mealChangeHandler = (event) => {
    setMealCount(event.target.value);
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id, // this changed!
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
        value={+mealCount}
        onChange={mealChangeHandler}   
      />
      <Button text="+ Add" onClick={onButtonHandler} />
    </form>
  );
};
export default MealItemForm;
