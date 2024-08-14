import { Grid, Typography } from "@mui/material";
import React from "react";

const WeatherBox = ({ weather }) => {
  return (
    <Grid
      item
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" gutterBottom>
        {weather.name}
      </Typography>
      <Typography variant="h2">{weather.main.temp}</Typography>
      <Typography variant="h3" gutterBottom>
        {weather.weather[0].description}
      </Typography>
    </Grid>
  );
};

export default WeatherBox;
