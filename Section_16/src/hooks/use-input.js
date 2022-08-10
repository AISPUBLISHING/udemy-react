import { useState } from "react";

const useInput = (checkInputIsValid) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const isValidInput = checkInputIsValid(inputValue);
  const hasError = !isValidInput && inputIsTouched;

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputTouchedHandler = () => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setInputIsTouched(false);
  };

  return {
    inputValue,
    isValidInput,
    hasError,
    inputHandler,
    inputTouchedHandler,
    reset,
  };
};

export default useInput;
