import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar'
import Shop from './components/Shop'
import Home from './components/Home'
import Cart from './components/Cart'
import bookData from './components/Books'

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsDict, setCartItemsDict] = useState({});
  const addItem = (id, quantity) => {
    if (cartItemsDict[id]) {
      bookData[id]['quantity'] = bookData[id]['quantity'] + quantity;
    } else {
      bookData[id]['quantity'] = quantity;
      setCartItems((prev) => [...prev, bookData[id]])
      const book = {...cartItemsDict}
      book[id] = bookData[id]
      setCartItemsDict(book)
    }
  }

  return (
    <Router>
      <div id="AppContainer">
      <NavBar cartItems={cartItems.length}/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" render={() => (
             <Home bookData={bookData}/>
          )} />
          <Route path="/shop" render={() => (
             <Shop addItem={addItem} bookData={bookData}/>
          )} />
          <Route path="/cart" render={() => (
             <Cart cart={cartItems} bookData={bookData}/>
          )} />
        </Switch>
        </div>
    </Router>
  );
}
