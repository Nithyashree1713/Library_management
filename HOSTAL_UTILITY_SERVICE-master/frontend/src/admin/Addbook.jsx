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

    const { createBook } = usehostalstore();

    const submit = async () => {
        const { success, message } = await createBook(newBook);
        setNewBook({ name: "", author: "", category: "", publishedDate: "", image: "" });
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
            </div>
        </>
    );
}
