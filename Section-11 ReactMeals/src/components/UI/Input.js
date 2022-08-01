import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input
        type={props.type}
        min={props.min}
        step={props.step}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
export default Input;
