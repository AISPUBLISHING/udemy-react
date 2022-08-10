import { useState } from "react";

const useInput = (checkInputIsValid) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValidInput = checkInputIsValid(inputValue);
  const error = !isValidInput && isTouched;

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const touchedHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setIsTouched(false);
  };

  return {
    inputValue,
    isValidInput,
    error,
    inputHandler,
    touchedHandler,
    reset,
  };
};
export default useInput;
