import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorWithRefresh = ({ message }) => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate('/', { replace: true });
    window.location.reload();
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography color="error" variant="h6" gutterBottom>
        Error: {message}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleRefresh}
        sx={{ mt: 2 }}
      >
        Refresh
      </Button>
    </Box>
  );
};

export default ErrorWithRefresh;
