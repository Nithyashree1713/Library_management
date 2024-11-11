// import React from 'react'
// import Navbar from './Navbar'
// import './Favourite.css';

// export default function Favourite() {
//   return (
//     <div className="favorites-container">
//         <h1>Favorite Books</h1>
//         {favourite.length > 0 ? (
//             favourite.map((book, index) => (
//                 <div key={index} className="favorite-book-card">
//                     <img src={book.image} alt={book.name} />
//                     <p><strong>Book Name:</strong> {book.name}</p>
//                     {/* <p><strong>Author:</strong> {book.author}</p> */}
//                 </div>
//             ))
//         ) : (
//             <p>No favorite books added.</p>
//         )}
//     </div>
// );
// }

// FavoriteBooks.jsx
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

function FavoriteBooks() {
    const [favoriteBooks, setFavoriteBooks] = useState([]);

    useEffect(() => {
        // Retrieve favorites from localStorage
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavoriteBooks(favorites);
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <h2>Favorite Books</h2>
                {favoriteBooks.length > 0 ? (
                    favoriteBooks.map((book, index) => (
                        <div key={index} className="complaint-card">
                            <img src={book.image} alt={book.name} />
                            <p><strong>Book Name:</strong> {book.name}</p>
                            <p><strong>Author:</strong> {book.author}</p>
                            <p><strong>Category:</strong> {book.category}</p>
                            <p><strong>Published Date:</strong> {book.publishedDate}</p>
                        </div>
                    ))
                ) : (
                    <p>No favorite books found.</p>
                )}
            </div>
        </>
    );
}

export default FavoriteBooks;
