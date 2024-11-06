import React, { useEffect, useState } from 'react';
import './Searchuse.css';
import Navbar from './Navbar';
import { usehostalstore } from '../store/hostal.js';

function Userinfo() {
    const { book, fetch } = usehostalstore();
    const [orderStatus, setOrderStatus] = useState(""); // State to hold order feedback message

    useEffect(() => {
        fetch(); // Fetch books when component mounts
    }, [fetch]);

    // Handle order button click
    const handleOrderClick = async (bookId) => {
        const result = await fetch(bookId); // Call the orderBook function from the store
        setOrderStatus(result.message); // Update the orderStatus state with feedback
    };

    return (
        <>
            <Navbar />
            <div className="container">
                {orderStatus && <p className="order-status">{orderStatus}</p>} {/* Show order status */}

                {book.length > 0 ? (
                    book.map((books, index) => (
                        <div key={index} className="complaint-card">
                            <img src={books.image} alt={books.name} />
                            <p><strong>Book Name:</strong> {books.name}</p>
                            <p><strong>Author:</strong> {books.author}</p>
                            <p><strong>Category:</strong> {books.category}</p>
                            <p><strong>Published Date:</strong> {books.publishedDate}</p>
                            <button type="button" onClick={() => handleOrderClick(books._id)}>
                                Order
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No books found.</p>
                )}
            </div>
        </>
    );
}

export default Userinfo;
