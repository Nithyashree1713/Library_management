import React, { useEffect } from 'react';
import './Search.css';
import Navbar from './Navbar';
import { usehostalstore } from '../store/hostal.js';

function Search() {
    const { book, fetchBook,deletebook } = usehostalstore();

    useEffect(() => {
        fetchBook(); // Fetch complaints when component mounts
    }, [fetchBook]);
    const handleDelete = (id) => {
        deletebook(id); // Call deletebook from the store
    };

    return (
        <>
            <Navbar />
            <div className="container">
                {book.length > 0 ? (
                    book.map((books, index) => (
                        <div key={index} className="complaint-card">
                            <img src={books.image} alt="no"/>
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
        </>
    );
}

export default Search;