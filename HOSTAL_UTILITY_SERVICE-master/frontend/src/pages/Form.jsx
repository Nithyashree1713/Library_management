import React, { useState } from 'react';
import { usehostalstore } from '../store/hostal';
import './Form.css'; // Import the CSS file

function Form() {
    const [form, setNewForm] = useState({
        name: "",
        email: "",
        pno: "",
        date: "",
        book: ""
    });
    const [submissionStatus, setSubmissionStatus] = useState(""); 

    const { createform } = usehostalstore();

    const order = async () => {
        try {
            const response = await createform(form);
            console.log(response); // Check response in console for debugging

            if (response.success) {
                setSubmissionStatus("Order placed successfully!");
            } else {
                setSubmissionStatus("Failed to place order. Please try again.");
            }
        } catch (error) {
            console.error("Error placing order:", error); // Log any errors
            setSubmissionStatus("An error occurred. Please try again.");
        }

        setNewForm({ name: "", email: "", pno: "", date: "", book: "" });
    };

    return (
        <div className="form-container">
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={(e) => setNewForm({ ...form, name: e.target.value })}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={(e) => setNewForm({ ...form, email: e.target.value })}
            />

            <label htmlFor="pno">Mobile Number:</label>
            <input
                type="number"
                name="pno"
                id="pno"
                value={form.pno}
                onChange={(e) => setNewForm({ ...form, pno: e.target.value })}
            />

            <label htmlFor="book">Book Name:</label>
            <input
                type="text"
                name="book"
                id="book"
                value={form.book}
                onChange={(e) => setNewForm({ ...form, book: e.target.value })}
            />

            <label htmlFor="date">Issue Date:</label>
            <input
                type="date"
                name="date"
                id="date"
                value={form.date}
                onChange={(e) => setNewForm({ ...form, date: e.target.value })}
            />

            <button type="button" onClick={order}>Order</button>
            <a href="/sea"><button type="button" className="cancel-button">Cancel</button></a>

            {submissionStatus && <p>{submissionStatus}</p>}
        </div>
    );
}

export default Form;
