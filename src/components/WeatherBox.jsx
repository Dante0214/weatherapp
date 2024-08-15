import { Grid, Typography } from "@mui/material";
import React from "react";
import WeatherInfo from "./WeatherInfo";

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
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
      />
      <Typography variant="h2" gutterBottom>
        {Math.round(weather.main.temp * 10) / 10}°C
      </Typography>
      <Typography variant="h4" gutterBottom>
        체감 : {Math.round(weather.main.feels_like * 10) / 10}°C
      </Typography>
      <Typography variant="h4" gutterBottom>
        {WeatherInfo[weather.weather[0].id]}
      </Typography>
    </Grid>
  );
};

export default WeatherBox;
