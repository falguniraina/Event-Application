import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import ThemeSelector from './ThemeSelector';
import placeholderImg from '../assets/placeholderImg.avif';

const CreateEventForm = ({ addEvent }) => {
  const [event, setEvent] = useState({
    name: '',
    startDate: '',
    endDate: '',
    location: '',
    tickets: false,
    requireApproval: false,
    capacity: 'Unlimited',
    visibility: 'Public',
    theme: 'Minimal',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (new Date(event.startDate) >= new Date(event.endDate)) {
      alert('End date must be later than start date.');
      return;
    }
    addEvent(event);
    navigate('/list');
  };

  return (
    <div className="create-event-container">
      <nav>
        <a href="/list">Event List</a>
        <a href="/">Calendars</a>
        <a href="/">Explore</a>
      </nav>

      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={event.name}
            onChange={handleChange}
            className="form-control event-name-input"
            placeholder="Event Name"
            required
          />
        </div>

  
        <div className="date-time-section">
          <div className="date-icon">
            <FaCalendarAlt />
          </div>
          <div className="start-end-block">
            <div className="date-time-entry">
              <p>Start</p>
              <div className="date-entry">
                <input
                  type="datetime-local"
                  name="startDate"
                  value={event.startDate}
                  onChange={handleChange}
                  required
                />
                <span>{formatDate(event.startDate)}</span>
                <span>{formatTime(event.startDate)}</span>
              </div>
            </div>
            <div className="date-time-entry">
              <p>End</p>
              <div className="date-entry">
                <input
                  type="datetime-local"
                  name="endDate"
                  value={event.endDate}
                  onChange={handleChange}
                  required
                />
                <span>{formatDate(event.endDate)}</span>
                <span>{formatTime(event.endDate)}</span>
              </div>
            </div>
            <p className="time-zone">GMT+05:30 Calcutta</p>
            <a href="#" className="multi-session">Create Multi-Session Event</a>
          </div>
        </div>

      
        <div className="location-section">
          <div className="location-icon"><FaMapMarkerAlt /></div>
          <input
            type="text"
            name="location"
            className="location-input"
            value={event.location}
            onChange={handleChange}
            placeholder="Enter location or virtual link"
          />
        </div>

       
        <p>Event Options</p>
        <div className="event-options">
          <div className="event-option-item">
            <label>Tickets</label>
            <input type="text" value="Free" readOnly />
          </div>

          <div className="event-option-item">
            <label>Require Approval</label>
            <input type="checkbox" name="requireApproval" checked={event.requireApproval} onChange={handleChange} />
          </div>

          <div className="event-option-item">
            <label>Capacity</label>
            <input type="text" value="Unlimited" readOnly />
          </div>

          <div className="event-option-item">
            <label>Visibility</label>
            <select name="visibility" value={event.visibility} onChange={handleChange}>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Create Event</button>
      </form>

      <div className="image-section">
        <img src={placeholderImg} alt="You're Invited" />
        <div className="theme-color-typeface">
          <ThemeSelector theme={event.theme} onChange={handleChange} />

          <div className="color-options">
            <label>Color</label>
            <select name="color" onChange={handleChange}>
              <option>Gray</option>
              <option>Black</option>
              <option>Blue</option>
            </select>
          </div>

          <div className="typeface-options">
            <label>Typeface</label>
            <select name="typeface" onChange={handleChange}>
              <option>Default</option>
              <option>Serif</option>
              <option>Sans-serif</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventForm;
