import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import { FaPlus, FaEdit, FaTrash, FaCalendarAlt, FaUsers, FaFileAlt, FaCog, FaHome } from 'react-icons/fa';

function Admin() {
  const [activeTab, setActiveTab] = useState('events');
  const [events, setEvents] = useState([
    { id: 1, title: 'Orientation Day', date: '2026-08-15', type: 'event' },
    { id: 2, title: 'First Day of Classes', date: '2026-09-01', type: 'academic' },
    { id: 3, title: 'Programming Competition', date: '2026-09-20', type: 'competition' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', type: 'event' });

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date) {
      setEvents([...events, { ...newEvent, id: Date.now() }]);
      setNewEvent({ title: '', date: '', type: 'event' });
      setShowAddForm(false);
    }
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <div className="admin-logo">
          <h2>ICS Admin</h2>
        </div>
        <nav className="admin-nav">
          <Link to="/" className="back-home">
            <FaHome /> Back to Home
          </Link>
          <button 
            className={activeTab === 'events' ? 'active' : ''} 
            onClick={() => setActiveTab('events')}
          >
            <FaCalendarAlt /> Events
          </button>
          <button 
            className={activeTab === 'users' ? 'active' : ''} 
            onClick={() => setActiveTab('users')}
          >
            <FaUsers /> Users
          </button>
          <button 
            className={activeTab === 'content' ? 'active' : ''} 
            onClick={() => setActiveTab('content')}
          >
            <FaFileAlt /> Content
          </button>
          <button 
            className={activeTab === 'settings' ? 'active' : ''} 
            onClick={() => setActiveTab('settings')}
          >
            <FaCog /> Settings
          </button>
        </nav>
      </div>

      <div className="admin-main">
        <div className="admin-header">
          <h1>
            {activeTab === 'events' && 'Manage Events'}
            {activeTab === 'users' && 'Manage Users'}
            {activeTab === 'content' && 'Manage Content'}
            {activeTab === 'settings' && 'Settings'}
          </h1>
          {activeTab === 'events' && (
            <button className="btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
              <FaPlus /> Add Event
            </button>
          )}
        </div>

        <div className="admin-content">
          {activeTab === 'events' && (
            <>
              {showAddForm && (
                <div className="add-form">
                  <h3>Add New Event</h3>
                  <form onSubmit={handleAddEvent}>
                    <div className="form-group">
                      <label>Event Title</label>
                      <input
                        type="text"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                        placeholder="Enter event title"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Date</label>
                      <input
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Type</label>
                      <select 
                        value={newEvent.type}
                        onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                      >
                        <option value="event">Event</option>
                        <option value="academic">Academic</option>
                        <option value="competition">Competition</option>
                        <option value="exam">Exam</option>
                      </select>
                    </div>
                    <div className="form-actions">
                      <button type="submit" className="btn-primary">Save Event</button>
                      <button type="button" className="btn-secondary" onClick={() => setShowAddForm(false)}>Cancel</button>
                    </div>
                  </form>
                </div>
              )}

              <div className="events-table">
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map(event => (
                      <tr key={event.id}>
                        <td>{event.title}</td>
                        <td>{event.date}</td>
                        <td><span className={`badge ${event.type}`}>{event.type}</span></td>
                        <td>
                          <button className="btn-icon"><FaEdit /></button>
                          <button className="btn-icon" onClick={() => handleDeleteEvent(event.id)}><FaTrash /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === 'users' && (
            <div className="placeholder-content">
              <p>User management coming soon...</p>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="placeholder-content">
              <p>Content management coming soon...</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="placeholder-content">
              <p>Settings coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
