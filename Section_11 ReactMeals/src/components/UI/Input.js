import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        // id={props.input.id}
        // type={props.type}
        // min={props.min}
        // step={props.step}
        // value={props.value}
        // onChange={props.onChange}
        {...props.input}
        ref={ref}
      />
    </div>
  );
});
export default Input;
