import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function CreatePokerEventPage() {
    const navigate = useNavigate();
    const [location, setLocation] = useState("");
    const [name, setName] = useState("");
    const [games, setGames] = useState("");
    const [buyin, setBuyin] = useState("");
    const [capacity, setCapacity] = useState("");
    const [freegrog, setFreegrog] = useState("");
    const [firstprize, setFirstprize] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setError("");

        const values = {
            location,
            name,
            games,
            buyin,
            capacity,
            freegrog,
            firstprize,
            imageUrl
        };

        if (!values.title.trim() || !values.year.trim() || !values.rating.trim()) {
            setError("All fields are required.");
            return;
        }

        const yearNumber = parseInt(values.year, 10);
        if (isNaN(yearNumber) || yearNumber < 2000) {
            setError("Invalid year.");
            return;
        }

        const ratingNumber = parseFloat(values.rating);
        if (isNaN(ratingNumber) || ratingNumber < 1 || ratingNumber > 5) {
            setError("Rating must be between 1 and 5.");
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/Movies`, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: { 'Content-type': 'application/json' },
            });

            if (response.ok) {
                const newMovie = await response.json();
                console.log(newMovie);
                navigate(`/MoviesDetailsPage/${newMovie.id}`);
            } else {
                setError("An error occurred while creating the movie.");
            }
        } catch (error) {
            console.error(error);
            setError("An error occurred while creating the movie.");
        }
    }

    return (

        <div className="createYourOwnMoviePageCompleteScreen">
            <form className="createMovieForm"
                onSubmit={onSubmit} >
                {/* <table>
                    <tr>
                        <td><label for="title">Title:</label>
                        </td>
                        <td><input value={title} onChange={event => setTitle(event.target.value)} required id="title" />
                        </td>
                        <td><label for="year">Year:</label>
                        </td>
                        <td><input type='text' value={year} onChange={event => setYear(event.target.value)} required inputMode="numeric" pattern="[0-9]*" />
                        </td>
                        <td><label for="rating">Rating:</label>
                        </td>
                        <td><input type='text' value={rating} onChange={event => setRating(event.target.value)} required inputMode="decimal" pattern="[0-9]*" />
                        </td>
                        <td><label for="description">Description:</label>
                        </td>
                        <td><input value={description} onChange={event => setDescription(event.target.value)} required />
                        </td>
                        <td><label for="Image">Image:</label>
                        </td>
                        <td><input value={imageUrl} onChange={event => setImageUrl(event.target.value)} required />
                        </td>
                        <td><label for="review">Review:</label>
                        </td>
                        <td><input value={review} onChange={event => setReview(event.target.value)} required />
                        </td>
                    </tr>
                </table> */}
                <button type='submit'>Create New Poker Event</button>
            </form>
        </div>

    );
}

export default CreatePokerEventPage;
// import React from 'react';
// import { Link } from 'react-router-dom';


// function CreatePokerEventPage() {

// }

// export default CreatePokerEventPage;