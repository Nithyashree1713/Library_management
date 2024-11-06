import React from 'react'
import { usehostalstore } from '../store/hostal';
import { useState } from 'react';
function Form() {
    const [Form, setNewForm] = useState({
        name: "",
        email: "",
        pno: "",
        date:"",
        book:""
    });

    const { createform } = usehostalstore();

    const order = async () => {
        const { success, message } = await createform(Form);
        setNewForm({ name: "", email: "", pno: "" ,date:"",book:""});
    };
  return (
    <div>

        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={Form.name}
        onChange={(e) => setNewForm({ ...Form, name: e.target.value })}
        />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={Form.email}
        onChange={(e) => setNewForm({ ...Form, email: e.target.value })}
        />
        <label htmlFor="pno">Mobile Number:</label>
        <input type="number" name="pno" id="pno" value={Form.pno}
        onChange={(e) => setNewForm({ ...Form, pno: e.target.value })}
        />
        <label htmlFor="book">Book Name:</label>
        <input type="text" name='book' id='book' value={Form.book}
               onChange={(e) => setNewForm({ ...Form, book: e.target.value })}
 
        />
        <label htmlFor="date">Issue Date:</label>
        <input type="date" name='date' id='date' value={Form.date}
               onChange={(e) => setNewForm({ ...Form, date: e.target.value })}
 
        />
        <button type='submit'  onClick={order}>Order</button>
      <a href="/sea"> <button type='submit'>Cancel</button></a> 
    </div>
  )
}

export default Form