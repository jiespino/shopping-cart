import './Shop.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import BookDisplay from './BookDisplay'

function Shop(props) {
    let historyBookData = {}
    let philosophyBookData = {}
    let dystopianBookData = {}
    let novelBookData = {}
    let trueCrimeBookData = {}

    for (let key in props.bookData) {
        if (props.bookData[key].genre === "history") {
            historyBookData[key] = props.bookData[key];
        } else if (props.bookData[key].genre === "philosophy") {
            philosophyBookData[key] = props.bookData[key];
        } else if (props.bookData[key].genre === "dystopian") {
            dystopianBookData[key] = props.bookData[key];
        } else if (props.bookData[key].genre === "novel") {
            novelBookData[key] = props.bookData[key];
        } else if (props.bookData[key].genre === "trueCrime") {
            trueCrimeBookData[key] = props.bookData[key];
        }
    }
  return (
    <Router>
        <div id='shopContainer'>
        <nav id='shopNavBarContainer'>
            <ul id='shopnav-links'>
                    <Link to="/shop">
                        <li>All Books</li>
                    </Link>
                    <Link to="/shop/history">
                        <li>History</li>
                    </Link>
                    <Link to="/shop/philosophy">
                        <li>Philosophy</li>
                    </Link>
                    <Link to="/shop/dystopian">
                        <li>Dystopian</li>
                    </Link>
                    <Link to="/shop/trueCrime">
                        <li>True Crime</li>
                    </Link>
                    <Link to="/shop/novel">
                        <li>Novel</li>
                    </Link>
            </ul>
        </nav>
        <Switch>
            <Route exact path="/shop">
                <BookDisplay addItem={props.addItem} bookData={props.bookData}/>
            </Route>
            <Route exact path="/shop/history">
                <BookDisplay addItem={props.addItem} bookData={historyBookData}/>
            </Route>
            <Route exact path="/shop/philosophy">
                <BookDisplay addItem={props.addItem} bookData={philosophyBookData}/>
            </Route>
            <Route exact path="/shop/dystopian">
                <BookDisplay addItem={props.addItem} bookData={dystopianBookData}/>
            </Route>
            <Route exact path="/shop/novel">
                <BookDisplay addItem={props.addItem} bookData={novelBookData}/>
            </Route>
            <Route exact path="/shop/trueCrime">
                <BookDisplay addItem={props.addItem} bookData={trueCrimeBookData}/>
            </Route>
        </Switch>
        </div>
    </Router>
);
}

export default Shop;
