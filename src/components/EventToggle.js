import React from 'react';

const EventToggle = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="event-toggle">
      <button
        className={`toggle-btn ${selectedTab === 'upcoming' ? 'active' : ''}`}
        onClick={() => setSelectedTab('upcoming')}
      >
        Upcoming
      </button>
      <button
        className={`toggle-btn ${selectedTab === 'past' ? 'active' : ''}`}
        onClick={() => setSelectedTab('past')}
      >
        Past
      </button>
    </div>
  );
};

export default EventToggle;
