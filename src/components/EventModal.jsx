import React from 'react';
import { Button } from '@mui/material';

const EventModal = ({ data, onClose }) => {
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal">
        <h2>Open House Details</h2>
        <p>Date: {formatDate(data.date)}</p>
        <p>Time: {data.openHouse.time}</p>
        <Button
        sx={{ mt: 2 }}
        variant="contained"
          color="primary"
          onClick={onClose}
        >
          Close
      </Button>
      </div>
    </>
  );
};

export default EventModal;
