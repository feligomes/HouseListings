import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "./Calendar";
import { Button, Grid, Typography, Box, Paper, Divider } from "@mui/material";
import { getRandomImage } from "../utils/imageUtils";
import { mockListings } from "../data/mockData";

export default function SavedListingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const listingData = mockListings.find(l => l.id === id);
  
  if (!listingData) {
    return (
      <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: 2 }}>
        <Typography variant="h4" color="error">Listing not found</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
          sx={{ mt: 2 }}
        >
          Back to Saved Listings
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            {listingData.address}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#6c6c6c" }}>
            {listingData.city}, {listingData.state} {listingData.zipCode}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={8} xl={8}>
          <Box>
            <img
              src={getRandomImage()}
              alt="Property"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "600px",
                minHeight: "500px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              ${listingData.price.toLocaleString()}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" gutterBottom>
              {listingData.bedrooms} Beds | {listingData.bathrooms} Baths | {2000} Sq. Ft.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Available Dates
            </Typography>
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
