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
    const [image, setImage] = useState("");
    const [error, setError] = useState("");
    const token = localStorage.getItem("authToken")

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
            image
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/PokerEvents`, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}`, },
            });

            if (response.ok) {
                const newPokerEvent = await response.json();
                console.log(newPokerEvent);
                navigate(`/PokerEventsDetailsPage/${newPokerEvent._id}`);
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
                    <tbody>
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
                                <label htmlFor="image">post your picture link here:</label>
                        </td>
                        <td>
                                <input value={image} onChange={event => setImage(event.target.value)} required id="image" />
                        </td>
                    </tr>
                    </tbody>

                </table>

                <button type='submit'>Create New Poker Event</button>
            </form>
        </div>

    );
}

export default CreatePokerEventPage;