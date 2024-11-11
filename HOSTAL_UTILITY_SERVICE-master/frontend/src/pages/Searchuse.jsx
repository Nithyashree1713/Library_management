//Import usehostalstore
import React, { useEffect, useState } from 'react';
import './Searchuse.css';
import Navbar from './Navbar';
import { usehostalstore } from '../store/hostal.js';

function Searchuse() {
    const { book, fetchBook, orderBook, addFavorite } = usehostalstore();
    const [orderStatus, setOrderStatus] = useState(""); 
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [favorite,setfavorite] = useState();

    useEffect(() => {
        fetchBook();
    }, [fetchBook]);

    useEffect(() => {
        setFilteredBooks(
            book.filter(b =>
                b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                b.author.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [book, searchQuery]);


    const handleAddFavoriteClick = (book) => {
        const isNewFavorite =  addFavorite(book);

        console.log(isNewFavorite);
        
        if (isNewFavorite) {
        setOrderStatus("Book added to favorites!");
        // Clear orderStatus message after 2 seconds
        setTimeout(() => setOrderStatus(""), 2000);
        }
        else {
            setOrderStatus("This book is already in your favorites.");
            setTimeout(() => setOrderStatus(""), 2000);

        }
    };
    return (
        <>
            <Navbar />
            <div className="container">
                <input
                    type="text"
                    placeholder="Search by book name or author..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-bar"
                />

                {orderStatus && <p className="order-status">{orderStatus}</p>}

                {filteredBooks.length > 0 ? (
                    filteredBooks.map((books, index) => (
                        <div key={index} className="complaint-card">
                            <img src={books.image} alt={books.name} 
                 />
                            <p><strong>Book Name:</strong> {books.name} </p>
                            <p><strong>Author:</strong> {books.author}</p>
                            <p><strong>Category:</strong> {books.category}</p>
                            <p><strong>Published Date:</strong> {books.publishedDate}</p>
                            <button type="button" onClick={() => handleAddFavoriteClick(books)}>
                                Add to Favorite
                            </button>
                            <a href="/form"><button type='submit'>Order</button></a>
                        </div>
                    ))
                ) : (
                    <p>No books found.</p>
                )}
            </div>
        </>
    );
}

export default Searchuse;
/*
// Searchuse.js
import React, { useEffect, useState } from 'react';
import './Searchuse.css';
import Navbar from './Navbar';

function Searchuse() {
    const [book, setBook] = useState([
        // Sample books; replace with actual data
        { name: 'Book One', author: 'Author One', image: 'path/to/image1.jpg', category: 'Fiction', publishedDate: '2023' },
        { name: 'Book Two', author: 'Author Two', image: 'path/to/image2.jpg', category: 'Non-Fiction', publishedDate: '2022' },
    ]);
    const [orderStatus, setOrderStatus] = useState(""); 
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        setFilteredBooks(book);
    }, [book]);

    useEffect(() => {
        setFilteredBooks(
            book.filter(b =>
                b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                b.author.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [book, searchQuery]);

    const handleAddFavoriteClick = (book) => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        
        // Check if book is already in favorites
        const isFavorite = favorites.some(favBook => favBook.name === book.name);
        
        if (!isFavorite) {
            favorites.push(book);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            setOrderStatus("Book added to favorites!");
        } else {
            setOrderStatus("This book is already in your favorites.");
        }

        // Clear orderStatus message after 2 seconds
        setTimeout(() => setOrderStatus(""), 2000);
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <input
                    type="text"
                    placeholder="Search by book name or author..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-bar"
                />

                {orderStatus && <p className="order-status">{orderStatus}</p>}

                {filteredBooks.length > 0 ? (
                    filteredBooks.map((books, index) => (
                        <div key={index} className="complaint-card">
                            <img src={books.image} alt={books.name} />
                            <p><strong>Book Name:</strong> {books.name} </p>
                            <p><strong>Author:</strong> {books.author}</p>
                            <p><strong>Category:</strong> {books.category}</p>
                            <p><strong>Published Date:</strong> {books.publishedDate}</p>
                            <button type="button" onClick={() => handleAddFavoriteClick(books)}>
                                Add to Favorite
                            </button>
                            <a href="/form"><button type='submit'>Order</button></a>
                        </div>
                    ))
                ) : (
                    <p>No books found.</p>
                )}
            </div>
        </>
    );
}

export default Searchuse;

*/