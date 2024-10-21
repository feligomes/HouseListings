import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Box,
  Divider,
} from "@mui/material";
import Spinner from "./Spinner";
import ErrorWithRefresh from "./ErrorWithRefresh";
import { Link } from "react-router-dom";
import { getRandomImage } from "../utils/imageUtils";
const getRandomLabel = () => {
  return Math.random() < 0.5 ? "COMPASS COMING SOON" : "LISTED BY COMPASS";
};

const SavedListingsPage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/saved-listings");
      if (!response.ok) {
        throw new Error("Failed to fetch listings");
      }
      const data = await response.json();
      setListings(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;
  if (error)
    return <ErrorWithRefresh message={error} onRefresh={fetchListings} />;

  return (
    <Container maxWidth={"xl"} sx={{ py: 8, px: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: "32px",
            marginBottom: "8px",
          }}
        >
          Saved Listings
        </Typography>
        <Typography variant="subtitle1">
          View your saved listings here.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {listings.map((listing) => (
          <Grid item key={listing.id} xs={12} sm={12} md={6} lg={4} xl={3}>
            <Link
              to={`/saved-listing/${listing.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  height: 300,
                  position: "relative",
                  cursor: "pointer",
                  "&:hover": { boxShadow: 6 },
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={
                    getRandomImage() || "/placeholder.svg?height=300&width=400"
                  }
                  alt={listing.address}
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    zIndex: 1,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      fontWeight: "bold",
                      fontSize: "0.7rem",
                    }}
                  >
                    {getRandomLabel()}
                  </Typography>
                </Box>
                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    color: "white",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: "bold", mb: 0.5 }}
                      >
                        ${listing.price.toLocaleString()}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 0.5 }}>
                        {listing.address}
                      </Typography>
                      <Typography variant="body2">{`${listing.city}, ${listing.state} ${listing.zipCode}`}</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        height: "20px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "0.75rem" }}
                        >
                          {4}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "0.75rem" }}
                        >
                          Beds
                        </Typography>
                      </Box>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ mx: 1, bgcolor: "white" }}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "0.75rem" }}
                        >
                          {3}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "0.75rem" }}
                        >
                          Baths
                        </Typography>
                      </Box>

                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ mx: 1, bgcolor: "white" }}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "0.75rem" }}
                        >
                          {2000}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "0.75rem" }}
                        >
                          Sq. Ft.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SavedListingsPage;
