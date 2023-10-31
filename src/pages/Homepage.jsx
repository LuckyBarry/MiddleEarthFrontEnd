import React from 'react';
import { Link } from 'react-router-dom';


function Homepage() {
    return (
        <div className="home-page">
            <div className="text-background">

                <div className="background">
                    <h1>Welcome Poker Players of Middle Earth!</h1>
                </div>

                <div className="loginHomePage">
                    <Link to="/LoginPage">Log in to find your game of choice, or create your own!.</Link>
                </div>

                <h2><br></br>
                    <Link to="/SignUpPage">New to this site? Please register here.</Link></h2>
            </div>
        </div >
    );
}

export default Homepage;
