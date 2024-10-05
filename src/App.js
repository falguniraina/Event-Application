import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateEventForm from './components/CreateEventForm';
import EventList from './components/EventList';
import { addEventToList, getEvents } from './services/mockAPI';
import './styles.css';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  const addEvent = (event) => {
    addEventToList(event);
    setEvents(getEvents());
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<CreateEventForm addEvent={addEvent} />} />
          <Route path="/list" element={<EventList events={events} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;