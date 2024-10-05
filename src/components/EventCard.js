import React from 'react';
import { FaUserAlt, FaMapMarkerAlt } from 'react-icons/fa';
import people from '../assets/people.png';

const EventCard = ({ event }) => {
  const invitees = event.invitees || []; 

  return (
    <div className="event-card">
    
      <div className="event-left-section">
        <div className="event-date">
          <p className="event-date-day">
            {new Date(event.startDate).toLocaleString('en-US', { day: 'numeric', month: 'short' })}
          </p>
          <p className="event-date-weekday">
            {new Date(event.startDate).toLocaleString('en-US', { weekday: 'long' })}
          </p>
        </div>
        <div className="event-timeline">
          <div className="timeline-circle"></div>
          <div className="timeline-line"></div>
        </div>
      </div>

    
      <div className="event-details-section">
        <p className="event-time">
          {new Date(event.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
        <h3 className="event-title">{event.name}</h3>
        <div className="meta-info">
          <span><FaUserAlt /> By {event.host || 'Host'}</span>
          <span><FaMapMarkerAlt /> {event.location || 'Virtual'}</span>
        </div>

      
        <div className="invitee-section">
          <button className="invited-btn">Invited</button>
          <div className="invitee-avatars">
            <img src={people} alt="Invitees" className="invitee-avatar" />
          </div>
          <div className="invitee-count">+ others</div> 
        </div>
      </div>


      <div className="event-thumbnail">
        <img src={event.image || "https://via.placeholder.com/150"} alt="Event thumbnail" />
      </div>
    </div>
  );
};

export default EventCard;
