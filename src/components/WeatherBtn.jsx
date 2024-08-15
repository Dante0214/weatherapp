import { Button, ButtonGroup } from "@mui/material";
import React from "react";

const WeatherBtn = ({ cities, handleSetCity, selectedCity }) => {
  return (
    <>
      <ButtonGroup variant="text" aria-label="Basic button group">
        {cities.map((city) => (
          <Button
            sx={{
              color: "black",
              fontWeight: "bold",
              backgroundColor: selectedCity === city ? "#fff" : "transparent",
            }}
            onClick={() => handleSetCity(city)}
            key={city}
          >
            {city}
          </Button>
        ))}
      </ButtonGroup>
      <Button
        sx={{
          color: "black",
          fontWeight: "bold",
          backgroundColor: selectedCity === null ? "#fff" : "transparent",
        }}
        onClick={() => handleSetCity("current")}
      >
        현재 위치
      </Button>
    </>
  );
};

export default WeatherBtn;
