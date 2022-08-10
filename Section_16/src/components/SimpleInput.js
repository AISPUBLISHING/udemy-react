import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    inputValue:inputName,
    isValidInput:validInputName,
    hasError:checkNameIsInputValid,
    inputHandler:inputNameHandler,
    inputTouchedHandler:inputNameTouchedHandler,
    reset:nameInputReset,
  } = useInput(value => value.trim() !== "");


  const {
    inputValue:inputEmail,
    isValidInput:validInputEmail,
    hasError:checkEmailIsInputValid,
    inputHandler:inputEmailHandler,
    inputTouchedHandler:inputEmailTouchedHandler,
    reset:emailInputReset,
  } = useInput(value => value.trim() !== "");



  const formSubmitHandler = (event) => {
    event.preventDefault();
   
    if (!validInputName || !validInputEmail) {
      return;
    }

    console.log(inputName);
    nameInputReset()

    console.log(inputEmail);
    emailInputReset()
  };

  const nameInputClasses = checkNameIsInputValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = checkEmailIsInputValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={inputName}
          onChange={inputNameHandler}
          onBlur={inputNameTouchedHandler}
        />
        {checkNameIsInputValid && <p className="error-text">Please Enter Name</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="name">Your E-mail</label>
        <input
          type="email"
          id="email"
          value={inputEmail}
          onChange={inputEmailHandler}
          onBlur={inputEmailTouchedHandler}
        />
        {checkEmailIsInputValid && (
          <p className="error-text">Please Enter Email</p>
        )}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
