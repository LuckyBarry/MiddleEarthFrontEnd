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
            buyIn,
            capacity,
            freeGrog,
            firstPrize,
            imageUrl
        };

        if (!values.title.trim() || !values.year.trim() || !values.rating.trim()) {
            setError("All fields are required.");
            return;
        }

        const location = parseInt(values.location, 10);
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
            const response = await fetch(`${import.meta.env.VITE_API_URL}/PokerEvents`, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: { 'Content-type': 'application/json' },
            });

            if (response.ok) {
                const newMovie = await response.json();
                console.log(newPokerEvent);
                navigate(`/PokerEventsDetailsPage/${newPokerEvent.id}`);
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
                            <label htmlFor="namePokervenue">Pokervenue:</label>
                        </td>
                        <td>
                            <input value={location} onChange={event => setLocation(event.target.value)} required id="location" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="location">Location</label>
                        </td>
                        <td>
                            <input value={location} onChange={event => setLocation(event.target.value)} required id="location" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="location">Location</label>
                        </td>
                        <td>
                            <input value={location} onChange={event => setLocation(event.target.value)} required id="location" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="location">Location</label>
                        </td>
                        <td>
                            <input value={location} onChange={event => setLocation(event.target.value)} required id="location" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="location">Location</label>
                        </td>
                        <td>
                            <input value={location} onChange={event => setLocation(event.target.value)} required id="location" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="location">Location</label>
                        </td>
                        <td>
                            <input value={location} onChange={event => setLocation(event.target.value)} required id="location" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="location">Location</label>
                        </td>
                        <td>
                            <input value={location} onChange={event => setLocation(event.target.value)} required id="location" />
                        </td>
                    </tr>
                </table>

                <button type='submit'>Create New Poker Event</button>
            </form>
        </div>

    );
}

export default CreatePokerEventPage;