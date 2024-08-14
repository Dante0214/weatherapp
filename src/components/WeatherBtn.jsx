import React from "react";

const WeatherBtn = ({ cities, setCity }) => {
  return (
    <div>
      {cities.map((city) => (
        <button onClick={() => setCity(city)}>{city}</button>
      ))}
    </div>
  );
};

export default WeatherBtn;
