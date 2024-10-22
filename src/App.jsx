import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SavedListingsPage from './pages/SavedListings';
import SavedListingDetailsPage from './pages/SavedListingDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/saved-listings" element={<SavedListingsPage />} />
        <Route path="/saved-listing/:id" element={<SavedListingDetailsPage />} />
        <Route path="*" element={<Navigate to="/saved-listings" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
