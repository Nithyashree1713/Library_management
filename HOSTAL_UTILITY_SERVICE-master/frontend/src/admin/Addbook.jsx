import React, { useState } from 'react';
import Navbar from './Navbar';
import './Addbook.css';
import { usehostalstore } from '../store/hostal';

export default function Addbook() {
    const [newBook, setNewBook] = useState({
        name: "",
        author: "",
        category: "",
        publishedDate: "",
        image: ""
    });

    const [successMessage, setSuccessMessage] = useState(""); // State for success message

    const { createBook } = usehostalstore();

    const submit = async () => {
        try {
            const { success, message } = await createBook(newBook);
            
            if (success) {
                setSuccessMessage("Book added successfully!"); 
                setTimeout(() => setSuccessMessage(""), 2000);
                // Show success message
            } else {
                setSuccessMessage(message || "Failed to add book. Please try again."); // Handle failure
            }

            // Reset form fields
            setNewBook({ name: "", author: "", category: "", publishedDate: "", image: "" });

        } catch (error) {
            console.error("Error adding book:", error);
            setSuccessMessage("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="add-book-container">
                <h2>Add New Book</h2>

                <label htmlFor="name">Book Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={newBook.name}
                    onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
                />

                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    value={newBook.author}
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                />

                <label htmlFor="category">Category:</label>
                <input
                    type="text"
                    name="category"
                    id="category"
                    value={newBook.category}
                    onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
                />

                <label htmlFor="publishedDate">Published Date:</label>
                <input
                    type="date"
                    name="publishedDate"
                    id="publishedDate"
                    value={newBook.publishedDate}
                    onChange={(e) => setNewBook({ ...newBook, publishedDate: e.target.value })}
                />

                <label htmlFor="image">Image URL:</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    value={newBook.image}
                    onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
                />

                <button type="button" onClick={submit}>Submit</button>

                {/* Display success message */}
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
        </>
    );
}
