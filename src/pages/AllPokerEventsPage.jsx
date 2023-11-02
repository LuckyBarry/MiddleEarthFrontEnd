import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllPokerEventsPage() {
    const [pokerEvents, setPokerEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAllPokerEvents = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/pokerVenues`);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const eventsData = await response.json();
            console.log(eventsData)
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
            {pokerEvents.map((event) => {
                console.log(event)
                return (
                    <div key={event._id} className="allpokereventspage">
                    <Link to={`/PokerEventsDetailsPage/${event._id}`}>
                        <div className="poker-event-wrapper">
                                <img src={event.image} alt={event.name} className="allPokerEventsPageImages" />
                                <h1 className="allPokerEventsPageTitlesOnImage"> {event.name} </h1>
                        </div>
                    </Link>
                </div>
                )
            })}
        </>
    );
}

export default AllPokerEventsPage;