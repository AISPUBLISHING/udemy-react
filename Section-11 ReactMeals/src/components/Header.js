import React from "react";
import meals from "./images/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="My Awesome images" />
      </div>
    </>
  );
};
export default Header;
