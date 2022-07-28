import react, { useState } from "react";
import Card from "../UI/Card";
import classes from './UserForm.module.css'

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUSerAge] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const userAgeHandler = (event) => {
    setUSerAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userDate = {
      userName: userName,
      userAge: +userAge,
      id: Math.random(),
    };
    if (userName.length === 0 || userAge.length === 0) {
      console.log("fill it");
      return <div>please fill it</div>;
    } else if (Number(userAge) < 0) {
      console.log("age neg");
      return <div>age negative</div>;
    }
    props.onSaveUserData(userDate);
    setUserName("");
    setUSerAge("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label className="">Username</label>
          <input type="text" value={userName} onChange={userNameHandler} />
        </div>
        <div>
          <label>Age (Years)</label>
          <input type="number" value={userAge} onChange={userAgeHandler} />
        </div>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};
export default UserForm;
