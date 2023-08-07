import React, { Fragment,useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartISShown] = useState(false);

  const showCartHandler = () => {
    setCartISShown(true)
  }
  const hideCartHandler = () => {
    setCartISShown(false)
  }


  return (

    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} /> }
      <Header  onShowCart = {showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>

  );
}

export default App;
