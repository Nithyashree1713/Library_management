import React, { useEffect } from 'react';
import './Orderdet.css';
import Navbar from './Navbar';
import { usehostalstore } from '../store/hostal.js';

function Orderdet() {
    const { form, fetchform } = usehostalstore();

    useEffect(() => {
      fetchform(); // Fetch complaints when component mounts
    }, [fetchform]);
   
    return (
        <>

            <Navbar />
            <div className="container">
                {form.length > 0 ? (
                    form.map((forms, index) => (
                        <div key={index} className="complaint-card">
                            
                             <p><strong>Name:</strong> {forms.name}</p>
                            <p><strong>Email:</strong> {forms.email}</p>
                            
                            <p><strong>Mobile Number:</strong> {forms.pno}</p>
                            <p><strong>Book Name:</strong>{forms.book}</p>
                            <p><strong>Issue Date:</strong> {forms.date}</p>
                         
                        </div>
                    ))
                ) : (
                    <p>No Book found.</p>
                )}
            </div>
        </>
    );
}

export default Orderdet;