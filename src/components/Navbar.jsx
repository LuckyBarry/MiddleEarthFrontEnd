import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react'
import { AuthContext } from '../contexts/authContext'



function Navbar() {
    const { isAuthenticated, isLoading, setIsAuthenticated, setIsLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem("authToken")
        setIsAuthenticated(false)
        setIsLoading(false)
        navigate("/LoginPage")
    }

    return (
        <nav className="navbar">
            <div className='navBarLinks'>
                <Link to="/">Home</Link>
                <Link to="/AllPokerEventsPage">All Poker Events</Link>
                <Link to="/CreatePokerEventPage">Create Your Own Poker Event!</Link>
                {!isLoading && isAuthenticated ? <button type="button" onClick={handleLogOut}>
                    Log Out
                </button>
                    : undefined
                }
            </div>
        </nav>
    );
}

export default Navbar;