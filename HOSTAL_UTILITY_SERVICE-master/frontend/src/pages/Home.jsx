// Home.js

import React from 'react';
import Navbar from './Navbar';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <header className="header">
        <h1 className="title">Welcome to the Library </h1>
        <p className="subtitle">Your gateway to knowledge and resources</p>
      </header>
      <div className="content">
        <div className="card">
          <img src="/images/books.jpg" alt="Books" className="card-image" />
          <h3 className="card-title">Explore Books</h3>
          <p className="card-description">
            Discover books across various genres and authors.
          </p>
        </div>
        <div className="card">
          <img src="/images/membership.jpg" alt="Membership" className="card-image" />
          <h3 className="card-title">Membership Plans</h3>
          <p className="card-description">
            Join us to enjoy exclusive access and benefits.
          </p>
        </div>
        <div className="card">
          <img src="/images/reading.jpg" alt="Reading Room" className="card-image" />
          <h3 className="card-title">Book Reading Rooms</h3>
          <p className="card-description">
            Reserve a quiet spot for reading and study.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
