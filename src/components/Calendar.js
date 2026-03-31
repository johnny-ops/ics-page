import './Calendar.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarSection() {
  const [date, setDate] = useState(new Date());

  const events = [
    { date: new Date(2026, 7, 15), title: 'Orientation Day' },
    { date: new Date(2026, 8, 1), title: 'First Day of Classes' },
    { date: new Date(2026, 8, 20), title: 'Programming Competition' },
    { date: new Date(2026, 9, 10), title: 'Midterm Examinations' },
    { date: new Date(2026, 10, 5), title: 'Tech Summit 2026' },
    { date: new Date(2026, 11, 15), title: 'Final Examinations' },
  ];

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const hasEvent = events.some(event => 
        event.date.toDateString() === date.toDateString()
      );
      return hasEvent ? <div className="event-dot"></div> : null;
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const hasEvent = events.some(event => 
        event.date.toDateString() === date.toDateString()
      );
      return hasEvent ? 'react-calendar__tile--hasEvent' : null;
    }
  };

  return (
    <section className="calendar-section">
      <div className="calendar-container">
        <h2 className="calendar-title">Calendar of Activities</h2>
        
        <div className="calendar-widget">
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={tileContent}
            tileClassName={tileClassName}
          />
        </div>
      </div>
    </section>
  );
}

export default CalendarSection;
