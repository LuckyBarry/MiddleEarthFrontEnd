import React from 'react';
import { Link } from 'react-router-dom';


function Homepage() {
    return (
        <div className="home-page">

                <div className="welcomeBackground">
                <h1>Welcome Poker Players!</h1>
                <h1>to the Middle Earth rounders club</h1>
                </div>

                <div className="loginHomePage">
                <Link to="/LoginPage">Allready a regular? LOG IN.</Link>
                </div>

                <h2><br></br>
                <Link to="/SignUpPage">New to this site? Please register here.</Link></h2>
        </div >
    );
}

export default Homepage;
