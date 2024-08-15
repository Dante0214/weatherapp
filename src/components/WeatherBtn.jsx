import { Button, ButtonGroup } from "@mui/material";
import React from "react";

const WeatherBtn = ({ cities, handleSetCity }) => {
  return (
    <>
      <ButtonGroup variant="text" aria-label="Basic button group">
        {cities.map((city) => (
          <Button
            sx={{ color: "black", fontWeight: "bold" }}
            onClick={() => handleSetCity(city)}
          >
            {city}
          </Button>
        ))}
      </ButtonGroup>
      <Button
        sx={{ color: "black", fontWeight: "bold" }}
        onClick={() => handleSetCity("current")}
      >
        현재 위치
      </Button>
    </>
  );
};

export default WeatherBtn;
