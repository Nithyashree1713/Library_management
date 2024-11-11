// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Searchuse from './pages/Searchuse';
import FavoriteBooks from './pages/FavoriteBooks'; // Updated path

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Searchuse />} />
                <Route path="/fav" element={<FavoriteBooks />} />
            </Routes>
        </Router>
    );
}

export default App;
