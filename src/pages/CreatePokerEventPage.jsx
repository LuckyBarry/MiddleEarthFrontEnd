import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function CreatePokerEventPage() {
    const navigate = useNavigate();
    const [location, setLocation] = useState("");
    const [name, setName] = useState("");
    const [games, setGames] = useState("");
    const [buyIn, setBuyIn] = useState("");
    const [capacity, setCapacity] = useState("");
    const [freeGrog, setFreegrog] = useState("");
    const [firstPrize, setFirstPrize] = useState("");
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
            const response = await fetch(`${import.meta.env.VITE_API_URL}/PokerEvents`, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: { 'Content-type': 'application/json' },
            });

            if (response.ok) {
                const newPokerEvent = await response.json();
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
                            <label htmlFor="name">Name of the venue:</label>
                        </td>
                        <td>
                            <input value={name} onChange={event => setName(event.target.value)} required id="name" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="games">Which games are being played:</label>
                        </td>
                        <td>
                            <input value={games} onChange={event => setGames(event.target.value)} required id="games" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="buyIn">Buy-in:</label>
                        </td>
                        <td>
                            <input value={buyIn} onChange={event => setBuyIn(event.target.value)} required id="location" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="capacity">Capacity:</label>
                        </td>
                        <td>
                            <input value={capacity} onChange={event => setCapacity(event.target.value)} required id="capacity" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="freeGrog">Is there free grog:</label>
                        </td>
                        <td>
                            <input value={freeGrog} onChange={event => setFreegrog(event.target.value)} required id="freeGrog" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="firstPrize">What is the first prize:</label>
                        </td>
                        <td>
                            <input value={firstPrize} onChange={event => setFirstPrize(event.target.value)} required id="firstPrize" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="imageUrl">post your picture link here:</label>
                        </td>
                        <td>
                            <input value={imageUrl} onChange={event => setImageUrl(event.target.value)} required id="imageUrl" />
                        </td>
                    </tr>
                </table>

                <button type='submit'>Create New Poker Event</button>
            </form>
        </div>

    );
}

export default CreatePokerEventPage;