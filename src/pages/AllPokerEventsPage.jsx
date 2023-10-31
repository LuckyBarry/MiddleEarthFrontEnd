import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllPokerEventsPage() {
    const [pokerEvents, setPokerEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAllPokerEvents = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/Events`);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const eventsData = await response.json();
            setPokerEvents(eventsData);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching movie data:", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAllPokerEvents();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {pokerEvents.map((event) => (
                <div key={event.id} className="poker-event">
                    <Link to={`/PokerEventsDetailsPage/${event._id}`}>
                        <div className="poker-event-wrapper">
                            <img src={event.imageUrl} alt={event.title} className="allPokerEventsPageImages" />
                            <h1 className="allPokerEventsPageTitlesOnImage"> {event.title} </h1>
                            <div className="poker-event-review">{event.review}</div>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default AllPokerEventsPage;