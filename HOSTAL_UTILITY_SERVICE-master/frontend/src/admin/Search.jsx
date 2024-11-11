import React, { useEffect, useState } from 'react';
import './Search.css';
import Navbar from './Navbar';
import { usehostalstore } from '../store/hostal.js';

function Search() {
    const { book, fetchBook, deletebook } = usehostalstore();
    const [searchQuery, setSearchQuery] = useState(''); // State for search input
    const [filteredBooks, setFilteredBooks] = useState([]); // State for filtered books

    useEffect(() => {
        fetchBook(); // Fetch books when component mounts
    }, [fetchBook]);

    useEffect(() => {
        // Filter books based on search query
        setFilteredBooks(
            book.filter((books) =>
                books.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                books.author.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [book, searchQuery]);

    const handleDelete = (id) => {
        deletebook(id); // Call deletebook from the store
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search by book name or author"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-bar"
                    />
                </div>
                <div className="books-container">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((books, index) => (
                            <div key={index} className="complaint-card">
                                <img src={books.image} alt="No image available" />
                                <p><strong>Book Name:</strong> {books.name}</p>
                                <p><strong>Author:</strong> {books.author}</p>
                                <p><strong>Category:</strong> {books.category}</p>
                                <p><strong>Published Date:</strong> {books.publishedDate}</p>
                                <button type='button' onClick={() => handleDelete(books._id)}>Delete</button>
                            </div>
                        ))
                    ) : (
                        <p>No Book found.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Search;
