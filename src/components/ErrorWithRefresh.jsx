import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const ErrorWithRefresh = ({ message, onRefresh }) => {
  const handleRefresh = () => {
    onRefresh();
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
