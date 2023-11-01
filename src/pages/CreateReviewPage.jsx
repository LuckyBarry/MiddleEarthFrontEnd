import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function CreateReviewPage() {
    const navigate = useNavigate();
    const [location, setLocation] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [reviewer, setReviewer] = useState("");
    const [review, setReview] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setError("");

        const values = {
            location,
            name,
            date,
            reviewer,
            review,
            imageUrl
        };

        // if (!values.title.trim() || !values.year.trim() || !values.rating.trim()) {
        //     setError("All fields are required.");
        //     return;
        // }

        // const location = parseInt(values.location, 10);
        // if (isNaN(yearNumber) || yearNumber < 2000) {
        //     setError("Invalid year.");
        //     return;
        // }

        // const ratingNumber = parseFloat(values.rating);
        // if (isNaN(ratingNumber) || ratingNumber < 1 || ratingNumber > 5) {
        //     setError("Rating must be between 1 and 5.");
        //     return;
        // }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/Reviews`, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: { 'Content-type': 'application/json' },
            });

            if (response.ok) {
                const newReview = await response.json();
                console.log(newReview);
                navigate(`/PokerEventsReviewPage/${newReview.id}`);
            } else {
                setError("An error occurred while creating the poker event.");
            }
        } catch (error) {
            console.error(error);
            setError("An error occurred while creating the poker event.");
        }
    }

    return (

        <div className="createPokerEvent">
            <form className="createPokerEventForm"
                onSubmit={onSubmit} >
                <table>
                    <tr>
                        <td>
                            <label htmlFor="location">Location:</label>
                        </td>
                        <td>
                            <input value={location} onChange={event => setLocation(event.target.value)} required id="location" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="name">Name of the venue:</label>
                        </td>
                        <td>
                            <input value={name} onChange={event => setName(event.target.value)} required id="name" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="date">At which time of year did you play here:</label>
                        </td>
                        <td>
                            <input value={date} onChange={event => setDate(event.target.value)} required id="date" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="reviewer"> Write thou name here reviewer:</label>
                        </td>
                        <td>
                            <input value={reviewer} onChange={event => setReviewer(event.target.value)} required id="reviewer" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="review">Write a detailed review here:</label>
                        </td>
                        <td>
                            <input value={review} onChange={event => setReview(event.target.value)} required id="review" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="imageUrl"> able to take a picture of it? post your link here:</label>
                        </td>
                        <td>
                            <input value={imageUrl} onChange={event => setImageUrl(event.target.value)} required id="imageUrl" />
                        </td>
                    </tr>
                </table>

                <button type='submit'>Click here! and thou shall post a review!</button>
            </form>
        </div>

    );
}

export default CreateReviewPage;



// import React from 'react';
// import { Link } from 'react-router-dom';


// function CreateReviewPage() {

// }

// export default CreateReviewPage;