import React, { useState } from 'react';
import EventCard from './EventCard';
import EventToggle from './EventToggle';

const EventList = ({ events }) => {
  const [selectedTab, setSelectedTab] = useState('upcoming');


  const currentDate = new Date();


  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.startDate);
    if (selectedTab === 'upcoming') {
      return eventDate >= currentDate; 
    } else if (selectedTab === 'past') {
      return eventDate < currentDate;
    }
    return false;
  });

  return (
    <div className="event-list-container">
      <EventToggle selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <h2 className="event-list-header">
        {selectedTab === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
      </h2>
      <div className="event-list">
        {filteredEvents.length === 0 ? (
          <p>No {selectedTab} events.</p>
        ) : (
          filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        )}
      </div>
    </div>
  );
};

export default EventList;
