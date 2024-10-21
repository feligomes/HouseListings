import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "./Calendar";
import Spinner from "./Spinner";
import ErrorWithRefresh from "./ErrorWithRefresh";
import { Button, Grid, Typography, Box, Paper, Divider } from "@mui/material";
import { getRandomImage } from "../utils/imageUtils";

export default function SavedListingDetails() {
  const [loading, setLoading] = useState(true);
  const [listingData, setListingData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchListingData(id);
  }, [id]);

  const fetchListingData = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/saved-listings/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch listing data");
      }
      const data = await response.json();
      setListingData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;
  if (error)
    return (
      <ErrorWithRefresh
        message={error}
        onRefresh={() => fetchListingData(id)}
      />
    );
  if (!listingData) return null;

  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            {listingData.address}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {listingData.city}, {listingData.state} {listingData.zipCode}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box>
            <img
              src={getRandomImage()}
              alt="Property"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "600px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              ${listingData.price.toLocaleString()}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" gutterBottom>
              {2} Beds | {3} Baths | {2000} Sq. Ft.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Calendar openHouses={listingData.openHouses} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Property Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4}>
                <Typography variant="body2">
                  Status:{" "}
                  <Box component="span" fontWeight="bold">
                    Active
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography variant="body2">
                  Year Built:{" "}
                  <Box component="span" fontWeight="bold">
                    1992
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography variant="body2">
                  HOA Fees:{" "}
                  <Box component="span" fontWeight="bold">
                    $2,971/month
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography variant="body2">
                  Taxes:{" "}
                  <Box component="span" fontWeight="bold">
                    $20,204/year
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography variant="body2">
                  Property Type:{" "}
                  <Box component="span" fontWeight="bold">
                    Condo
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography variant="body2">
                  Min. Down Pymt:{" "}
                  <Box component="span" fontWeight="bold">
                    10%
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
          >
            Back to Saved Listings
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
