import react, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./UserForm.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helper/Wrapper";

const UserForm = (props) => {
  const refUserName = useRef();
  const refUserAge = useRef();
  // const [userName, setUserName] = useState("");
  // const [userAge, setUSerAge] = useState("");
  const [error, setError] = useState();

  // const userNameHandler = (event) => {
  //   setUserName(event.target.value);
  // };
  // const userAgeHandler = (event) => {
  //   setUSerAge(event.target.value);
  // };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(refUserName.current.value, refUserAge.current.value);
    const userDate = {
      userName: refUserName.current.value,
      userAge: refUserAge.current.value,
      id: Math.random(),
    };
    if (refUserName.current.value.length === 0 || refUserAge.current.value.length === 0) {
      setError({
        title: "Invalid Input",
        content: "Please enter a valid input",
      });
      return;
    }
    if (+refUserAge.current.value.length < 0) {
      setError({
        title: "Invalid Age",
        content: "Please enter a valid Age",
      });
      return;
    }
    props.onSaveUserData(userDate);
    // setUserName("");
    // setUSerAge("");
    refUserName.current.value = ''
    refUserAge.current.value = ''
  };

  const closeHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModel
          title={error.title}
          content={error.content}
          onclick={closeHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label className="">Username</label>
            <input
              type="text"
              ref={refUserName}
              // value={userName}
              // onChange={userNameHandler}
            />
          </div>
          <div>
            <label>Age (Years)</label>
            <input
              type="number"
              ref={refUserAge}
              // value={userAge}
              // onChange={userAgeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default UserForm;
