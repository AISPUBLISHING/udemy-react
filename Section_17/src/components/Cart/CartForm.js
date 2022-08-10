import useInput from "../../hooks/use-input";
import classes from "./CartForm.module.css";
import useHttp from "../../hooks/use-http";

const CartForm = () => {
  const { isLoading, error, sendRequest } = useHttp();

  const {
    inputValue: nameInputValue,
    isValidInput: nameIsValidInput,
    error: nameError,
    inputHandler: nameInputHandler,
    touchedHandler: nameTouchedHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: addressInputValue,
    isValidInput: addressIsValidInput,
    error: addressError,
    inputHandler: addressInputHandler,
    touchedHandler: addressTouchedHandler,
    reset: addressReset,
  } = useInput((value) => value.trim() !== "");

  const formHandler = (event) => {
    console.log("hello");
    event.preventDefault();

    console.log(nameInputValue, addressInputValue);

    // if (nameIsValidInput || addressIsValidInput) {
    //   return;
    // }

    sendRequest(
      {
        url: "https://hook-9efe3-default-rtdb.firebaseio.com/meals.json",
        method: "POST",
        data: { name: nameInputValue, address: addressInputValue },
        headers: {
          "Content-Type": "application/json",
        },
      },
      () => {}
    );

    nameReset();
    addressReset();
  };

  //   const nameClass = nameIsValidInput ? "form-control" : "form-control invalid";
  //   const addressClass = addressIsValidInput ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formHandler}>
      <div className={classes["control-group"]}>
        <div className={classes["form-control"]}>
          <label>Name</label>
          <input
            value={nameInputValue}
            onChange={nameInputHandler}
            onBlur={nameTouchedHandler}
            type="text"
          />
          {nameError && <p>Please enter the name</p>}
        </div>
        <div className={classes["form-control"]}>
          <label>Address</label>
          <input
            value={addressInputValue}
            onChange={addressInputHandler}
            onBlur={addressTouchedHandler}
            type="text"
          />
          {addressError && <p>Please enter the Address</p>}
        </div>
      </div>
      <div>
        <button>Check Out</button>
        {/* {isLoading && <button>Check Out....</button>}
        {error && <button>error....</button>} */}
      </div>
    </form>
  );
};
export default CartForm;
