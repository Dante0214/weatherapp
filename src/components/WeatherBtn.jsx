import { Button, ButtonGroup } from "@mui/material";
import React from "react";

const WeatherBtn = ({ cities, setCity }) => {
  return (
    <ButtonGroup variant="text" aria-label="Basic button group">
      {cities.map((city) => (
        <Button
          sx={{ color: "black", fontWeight: "bold" }}
          onClick={() => setCity(city)}
        >
          {city}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherBtn;
