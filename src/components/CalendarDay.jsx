import React from 'react';

const CalendarDay = ({ day, onClick }) => {
  if (!day.date) {
    return <div className="day empty"></div>;
  }

  const dayClassName = `day${day.isToday ? ' today' : ''}${
    day.openHouse && !day.isPast ? ' available' : ''
  }${day.isPast ? ' past' : ''}`;

  const handleClick = () => {
    if (!day.isPast && day.openHouse) {
      onClick();
    }
  };

  return (
    <div className={dayClassName} onClick={handleClick}>
      {day.date.getDate()}
    </div>
  );
};

export default CalendarDay;
