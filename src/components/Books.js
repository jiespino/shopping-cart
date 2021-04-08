import uniqid from "uniqid";

import EastOfEden from './BookImages/EastOfEden.jpg'
import TheGoodEarth from './BookImages/TheGoodEarth.png'
import TheGrapesOfWrath from './BookImages/TheGrapesOfWrath.png'
import InColdBlood from './BookImages/InColdBlood.png'
import FlowersForAlgernon from './BookImages/FlowersForAlgernon.jpg'
import GO1984 from './BookImages/1984.jpg'
import TheHolocaust from './BookImages/TheHolocaust.jpg'
import TheHotHouse from './BookImages/TheHotHouse.jpg'
import TheRepublic from './BookImages/TheRepublic.jpg'
import TheScarletLetter from './BookImages/TheScarletLetter.jpg'
import BraveNewWorld from './BookImages/BraveNewWorld.jpg'
import FahrenHeit451 from './BookImages/Fahrenheit451.jpg'
import AllQuietOnTheWesternFront from './BookImages/AllQuietOnTheWesternFront.jpg'
import WarAndPeace from './BookImages/WarAndPeace.jpg'
import TheRiseAndFall from './BookImages/TheRiseAndFall.jpg'
import HistOfWesternPhil from './BookImages/HistOfWesternPhil.jpg'

class Book {
    constructor(image, title, genre, priceWhole, priceDecimal) {
        this.image = image;
        this.title = title;
        this.genre = genre;
        this.priceWhole = priceWhole;
        this.priceDecimal = priceDecimal;
        this.id = uniqid();
    }
}

const bookGenres = ["history", "philosophy", "dystopian", "novel", "trueCrime"];
let books = [
    new Book(EastOfEden, "East of Eden", bookGenres[3], "15", "00"),
    new Book(TheGoodEarth, "The Good Earth", bookGenres[3], "17", "99"),
    new Book(TheGrapesOfWrath, "The Grapes of Wrath", bookGenres[3], "12", "29"),
    new Book(InColdBlood,"In Cold Blood", bookGenres[4], "10", "29"),
    new Book(FlowersForAlgernon, "Flowers for Algernon", bookGenres[3], "8", "49"),
    new Book(GO1984, "1984", bookGenres[2], "7", "48"),
    new Book(TheHolocaust, "The Holocaust", bookGenres[0], "12", "99"),
    new Book(TheHotHouse, "The Hot House", bookGenres[4], "8", "99"),
    new Book(TheRepublic, "The Republic", bookGenres[1], "10", "99"),
    new Book(TheScarletLetter, "The Scarlett Letter", bookGenres[3], "7", "20"),
    new Book(BraveNewWorld, "Brave New World", bookGenres[2], "11", "55"),
    new Book(FahrenHeit451, "Fahrenheit 451", bookGenres[2], "15", "99"),
    new Book(AllQuietOnTheWesternFront, "All Quiet on the Western Front", bookGenres[3], "5", "04"),
    new Book(WarAndPeace, "War and Peace", bookGenres[3], "13", "99"),
    new Book(TheRiseAndFall, "The Rise and Fall of the Third Reich", bookGenres[0], "7", "46"),
    new Book(HistOfWesternPhil, "A History of Western Philosophy", bookGenres[1], "23", "40")
]

let bookData = {};
// Create book dictionary
for (let i in books) {
    bookData[books[i].id] = books[i]
}

export default bookData