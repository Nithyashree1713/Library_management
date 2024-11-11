// // src/pages/FavoriteBooks.jsx
// import React from 'react';
// import { usehostalstore } from '../store/hostal.js';

// function FavoriteBooks() {
//     const favoriteBooks = usehostalstore((state) => state.favoriteBooks); // Access favoriteBooks from the store
//     console.log("Favorite books retrieved:", favoriteBooks);

//     return (
//         <div className="favorites-container">
//             <h1>Your Favorite Books</h1>
//             {favoriteBooks.length > 0 ? (
//                 favoriteBooks.map((book, index) => (
//                     <div key={index} className="favorite-book-card">
//                         <img src={book.image} alt={book.name} />
//                         <p><strong>Book Name:</strong> {book.name}</p>
//                         <p><strong>Author:</strong> {book.author}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>No favorite books added.</p>
//             )}
//         </div>
//     );
// }

// export default FavoriteBooks;

// FavoriteBooks.jsx
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

function FavoriteBooks() {
    // const [favoriteBooks, setFavoriteBooks] = useState([]);

    // useEffect(() => {
    //     // Retrieve favorites from localStorage
    //     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    //     setFavoriteBooks(favorites);
    // }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <h2>Favorite Books</h2>
              
                        <div  className="complaint-card">
                            <img src="https://m.media-amazon.com/images/I/81S8bz88s-L._AC_UF1000,1000_QL80_.jpg" />
                            <p><strong>Book Name:</strong>MERN</p>
                            <p><strong>Author:</strong> Kitty</p>
                            <p><strong>Category:</strong> CSE</p>
                            <p><strong>Published Date:</strong> 2024-10-22T00:00:00.000Z</p>
                        </div>
                  
            </div>
        </>
    );
}

export default FavoriteBooks;
