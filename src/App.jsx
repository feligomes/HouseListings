import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SavedListings from './pages/SavedListings';
import SavedListingDetails from './pages/SavedListingDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/saved-listings" element={<SavedListings />} />
        <Route path="/saved-listing/:id" element={<SavedListingDetails />} />
        <Route path="*" element={<Navigate to="/saved-listings" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
