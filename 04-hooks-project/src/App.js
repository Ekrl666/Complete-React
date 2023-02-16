import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import ContextProvider from "./store/CartProvider";

function App() {
  const [IsCartShown, SetIsCartShown] = useState(false);

  const showCartHandler = () => {
    SetIsCartShown(true)
  }

  const hideCartHandler = () => {
    SetIsCartShown(false)
  }

  return (
    <ContextProvider>
      {IsCartShown && <Cart onHide= {hideCartHandler}/>}
      <Header onShow= {showCartHandler}/>
      <main>
      <Meals />
      </main>
    </ContextProvider>
  );
}

export default App;
