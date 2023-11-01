import React from 'react';
import { Link } from 'react-router-dom';


function Homepage() {
    return (
        <div className="home-page">

                <div className="welcomeBackground">
                <h1>Welcome Poker Players!</h1>
                <h1>to the Middle Earth Rounders Club</h1>
                </div>

                <div className="loginHomePage">
                <Link to="/LoginPage">Allready a regular? LOG IN.</Link>
                <Link to="/SignUpPage">New to this site? Please register here.</Link>
            </div>
        </div >
    );
}

export default Homepage;
