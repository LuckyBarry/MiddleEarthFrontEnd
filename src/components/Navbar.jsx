import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {

    return (
        <nav className="navbar">
            <div className='navBarLinks'>
                <Link to="/">Home</Link>
                <Link to="/AllPokerEventsPage">All Poker Events</Link>
                <Link to="/CreatePokerEventPage">Create Your Own Poker Event!</Link>
                <Link to="/PokerEventsReviewPage">Reviews</Link>
            </div>
        </nav>
    );
}

export default Navbar;