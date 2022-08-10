import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    inputValue: inputName,
    isValidInput: validInputName,
    hasError: checkNameIsInputValid,
    inputHandler: inputNameHandler,
    inputTouchedHandler: inputNameTouchedHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: inputLastName,
    isValidInput: validInputLastName,
    hasError: checkLastNameIsInputValid,
    inputHandler: inputLastNameHandler,
    inputTouchedHandler: inputLastNameTouchedHandler,
    reset: LastNameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: inputEmail,
    isValidInput: validInputEmail,
    hasError: checkEmailIsInputValid,
    inputHandler: inputEmailHandler,
    inputTouchedHandler: inputEmailTouchedHandler,
    reset: emailInputReset,
  } = useInput((value) => value.trim() !== "");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!validInputName || !validInputLastName || !validInputEmail) {
      return;
    }

    
    nameInputReset();
    LastNameInputReset();
    emailInputReset();
  };

  const nameInputClasses = checkNameIsInputValid
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = checkLastNameIsInputValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = checkEmailIsInputValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={inputName}
            onChange={inputNameHandler}
            onBlur={inputNameTouchedHandler}
          />
          {checkNameIsInputValid && <p>Enter Name</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={inputLastName}
            onChange={inputLastNameHandler}
            onBlur={inputLastNameTouchedHandler}
          />
          {checkLastNameIsInputValid && <p>Enter last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={inputEmail}
          onChange={inputEmailHandler}
          onBlur={inputEmailTouchedHandler}
        />
        {checkEmailIsInputValid && <p>Enter email</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
