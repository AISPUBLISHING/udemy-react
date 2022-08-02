import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <div>
      {cartIsShow && <Cart onClose = {hideCartHandler}/>}
      <Header onShowCard={showCartHandler} />
      <main>
        <Meal />
      </main>
    </div>
  );
}

export default App;
