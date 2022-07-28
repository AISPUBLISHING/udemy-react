import react, { useState } from "react";
import UserForm from "./Components/NewUser/UserForm";
import UserList from "./Components/User/UserList";

const DUMMY_DATA = [
  { userName: "dinial", userAge: 19, id: "u1" },
  { userName: "randy", userAge: 18, id: "u2" },
];

function App() {
  const [userData, setUserData] = useState(DUMMY_DATA);

  const saveUserDataHandler = (newUserData) => {
    setUserData((prevUserData) => {
      return [newUserData, ...prevUserData];
    });
  };

  return (
    <div>
      <UserForm onSaveUserData={saveUserDataHandler} />
      <UserList userData={userData} />
    </div>
  );
}

export default App;
