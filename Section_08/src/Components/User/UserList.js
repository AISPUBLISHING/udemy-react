import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.userData.map((data) => (
          <li key={data.id}>
            {data.userName} ({data.userAge} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
