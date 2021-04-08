import React, {useState, useRef} from "react";
import './BookPopUp.css'

const BookPopUp = props => {
  const textInput = useRef(null)
  const [quantity, setQuantity] = useState(0);

  function changeQuantity() {
      console.log(textInput.current.value)
      setQuantity(textInput.current.value)
  }

  function handleClick(currBook, quantity) {
    props.addItem(currBook, quantity)
    props.handleClose()
  }

  return (
    <div className="popup-box">
      <div className="box">
            <span className="close-icon" onClick={props.handleClose}>x</span>
            <h4 id="bookTitle">{props.bookData.title}</h4>
            <img src={props.bookData.image} alt={props.bookData.title}></img>
            <p id="price"><span id="priceSymbol">$</span><span id="priceWhole">{props.bookData.priceWhole}</span><span id="priceDecimal">{props.bookData.priceDecimal}</span></p>
        <form id="checkOutForm">
            <label>
            Quantity:
            <input id="quantityInput"
                name="quantity"
                type="number" pattern="[0-9]*" inputmode="numeric"
                ref={textInput}
                onChange={changeQuantity}/>

            </label>
            <button id="addToCartButton" type="button" onClick={()=>handleClick(props.currBook, quantity)}>Add to Cart</button>
        </form>
      </div>
    </div>
  );
};

export default BookPopUp;