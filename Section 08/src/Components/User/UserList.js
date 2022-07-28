const UserList = (props) => {
  return (
    <div>
      <div>
        {props.userData.map((data) => (
          <div>
             {data.userName} ({data.userAge} Years Old)
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserList;
