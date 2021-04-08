import React from "react";
import './NavBar.css'
import {Link} from "react-router-dom";

function NavBar(props) {

  return (
      <div>
        <nav id='topBarNavContainer'>
          <ul className='nav-links'>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/shop">
                <li>Shop</li>
            </Link>
            <Link to="/cart">
                <li>({props.cartItems}) Cart</li>
            </Link>
          </ul>
        </nav>
      </div>
  );
}

export default NavBar