import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PokerEventsDetailsPage() {
    const { id } = useParams();
    const [pokerEvent, setPokerEvent] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const apiUrl = `${import.meta.env.VITE_API_URL}/api/pokerEvents/${id}`; // Update the API endpoint
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([])
    const editPokerEvent = () => {
        setIsEditing(true);
    };
    async function fetchReviews() {
        const apiReviewsUrl = `${import.meta.env.VITE_API_URL}/api/reviews/${id}`;
        try {
            const response = await fetch(apiReviewsUrl, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            if (response.ok) {
                const parsed = await response.json()
                setReviews(parsed)
            }

        } catch (error) {
            console.log(error)
        }

    }
    const updatePokerEvent = (e) => {
        e.preventDefault();
        fetch(apiUrl, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pokerEvent),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                setIsEditing(false);
            })
            .catch((error) => {
                console.error("Error updating poker event:", error);
            });
    };

    const deletePokerEvent = () => {
        fetch(apiUrl, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(() => {
                setPokerEvent(null);
                navigate('/AllPokerEventsPage');
            })
            .catch((error) => {
                console.error("Error deleting poker event:", error);
            });
    };

    const fetchEvent = () => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((pokerEventData) => {
                setPokerEvent(pokerEventData);
            })
            .catch((error) => {
                console.error("Error fetching poker event data:", error);
            });
    }

    useEffect(() => {
        fetchEvent()
        fetchReviews()
    }, [apiUrl]);

    if (!pokerEvent) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pokerEventDetails">
            {isEditing ? (
                <form onSubmit={updatePokerEvent}>
                    <label>Location: </label>
                    <input type="text" value={pokerEvent.location} onChange={(e) => setPokerEvent({ ...pokerEvent, location: e.target.value })} />
                    <label>Name: </label>
                    <input type="text" value={pokerEvent.name} onChange={(e) => setPokerEvent({ ...pokerEvent, name: e.target.value })} />
                    <label>Games: </label>
                    <input type="text" value={pokerEvent.games} onChange={(e) => setPokerEvent({ ...pokerEvent, games: e.target.value })} />
                    <label>Buy-In: </label>
                    <input type="text" value={pokerEvent.buyIn} onChange={(e) => setPokerEvent({ ...pokerEvent, buyIn: e.target.value })} />
                    <label>Capacity: </label>
                    <input type="text" value={pokerEvent.capacity} onChange={(e) => setPokerEvent({ ...pokerEvent, capacity: e.target.value })} />
                    <label>Free Grog: </label>
                    <input type="text" value={pokerEvent.freeGrog} onChange={(e) => setPokerEvent({ ...pokerEvent, freeGrog: e.target.value })} />
                    <label>First Prize: </label>
                    <input type="text" value={pokerEvent.firstPrize} onChange={(e) => setPokerEvent({ ...pokerEvent, firstPrize: e.target.value })} />
                    <label>Image URL: </label>
                    <input type="text" value={pokerEvent.image} onChange={(e) => setPokerEvent({ ...pokerEvent, image: e.target.value })} />
                    <button type="submit">Update Poker Event</button>
                </form>
            ) : (
                <>
                    <h1>{pokerEvent.name}</h1>
                    <p>Location: {pokerEvent.location}</p>
                    <p>Games: {pokerEvent.games}</p>
                    <p>Buy-In: {pokerEvent.buyIn}</p>
                    <p>Capacity: {pokerEvent.capacity}</p>
                    <p>Free Grog: {pokerEvent.freeGrog}</p>
                    <p>First Prize: {pokerEvent.firstPrize}</p>
                    <img src={pokerEvent.image} alt={pokerEvent.name} className="PokerEventsDetailsPageImages" />
                    <br></br>
                        <div className="eventDetailsButtons">
                    <button onClick={editPokerEvent}>Edit Poker Event</button>
                    <button onClick={deletePokerEvent}>Delete Poker Event</button>
                        </div>

                </>
            )}
            <h2>Reviews about this venue:</h2>
            <div className="reviewStyles">
                {reviews.map(review => (
                    <div key={review._id}>
                        <p>
                            {
                                review.review
                            }
                        </p>
                        <p>
                            by:{review.reviewer.email}
                        </p>
                    </div>
                ))}
            </div>
            <div className="reviewSection">
                <label>Write your own review about this place</label>
                <br></br>
                <input className="reviewInputField"></input>
                <button onClick={editPokerEvent}>Submit Thou Review!</button>
            </div>
        </div>
    );
}

export default PokerEventsDetailsPage;

