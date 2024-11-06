// Admin.js

import React from 'react';
import Navbar from './Navbar';
import './Admin.css';

function Admin() {
  return (
    <div className="admin-container">
      <Navbar />
      <header className="header">
        <h1 className="title">Admin Dashboard</h1>
        <p className="subtitle">Manage your library resources and user accounts</p>
      </header>
      <div className="content">
        <div className="card">
          <img src="/images/manage-books.jpg" alt="Manage Books" className="card-image" />
          <h3 className="card-title">Manage Books</h3>
          <p className="card-description">
            Add, update, or remove books in the library collection.
          </p>
        </div>
        <div className="card">
          <img src="/images/manage-members.jpg" alt="Manage Members" className="card-image" />
          <h3 className="card-title">Manage Members</h3>
          <p className="card-description">
            View and manage library membership accounts.
          </p>
        </div>
        <div className="card">
          <img src="/images/reports.jpg" alt="Reports" className="card-image" />
          <h3 className="card-title">Generate Reports</h3>
          <p className="card-description">
            Access data insights and generate reports.
          </p>
        </div>
      </div>
      <div className="footer-image">
        <img
          src="https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/FEATURES-OF-LIBRARY-MANAGEMENT-SYSTEM-SOFTWARE-min-1024x897.png"
          alt="Library Features"
          className="background-image"
        />
      </div>
    </div>
  );
}

export default Admin;
