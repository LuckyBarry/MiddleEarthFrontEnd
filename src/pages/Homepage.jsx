import React from 'react';
import { Link } from 'react-router-dom';


function Homepage() {
    return (
        <div className="home-page">

                <div className="welcomeBackground">
                <h1>&nbsp;&nbsp;&nbsp;Welcome Poker Players...</h1>
                <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; to the Middle Earth Rounders Club</h1>
                </div>

                <div className="loginHomePage">
                <Link to="/LoginPage" className="link">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Already a regular? LOG IN.</Link>
                <Link to="/SignUpPage" className="link">&nbsp;&nbsp;&nbsp;New to this site? Please register here.</Link>
            </div>

        </div >
    );
}

export default Homepage;
