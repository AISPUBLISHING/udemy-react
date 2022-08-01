import React from "react";
import AvailableMeals from "./components/meal/AvailableMeals";
import MealsSummary from "./components/meal/MealsSummary";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
}

export default App;
