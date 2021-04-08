import {useState} from "react"

import './BookDisplay.css'
import bookData from './Books'
import BookPopUp from './BookPopUp'


function BookDisplay(props) {
  const [currBook, setCurrBook] = useState('');
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = (bookId) => {
    setIsOpen(!isOpen);
    setCurrBook(bookId)
  }
    const books = Object.keys(props.bookData).map(key => 
        <div key={bookData[key].id} className="bookContainer" onClick={() => togglePopup(bookData[key].id)}>
            <img src={bookData[key].image} alt={bookData[key].title}></img>
            <h4 id="bookTitle">{bookData[key].title}</h4>
            <p id="price"><span id="priceSymbol">$</span><span id="priceWhole">{bookData[key].priceWhole}</span><span id="priceDecimal">{bookData[key].priceDecimal}</span></p>
            </div>);
        
  return (
        <div id='bookDisplayContainer'>
            {books}
            {isOpen && <BookPopUp
            handleClose={togglePopup}
            currBook={currBook}
            addItem={props.addItem}
            bookData={props.bookData[currBook]}
            />}
        </div>
);
}

export default BookDisplay;
