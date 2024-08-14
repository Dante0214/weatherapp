import { useEffect, useState } from "react";
import "./App.css";
import WeatherBox from "./components/WeatherBox";
import WeatherBtn from "./components/WeatherBtn";
import { Container, Grid } from "@mui/material";
const API = import.meta.env.VITE_API_KEY;
const cities = ["seoul", "busan", "tokyo", "barcelona", "sydney"];
function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  };
  const getWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    console.log(data);
  };
  const getSelectWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    setWeather(data);
  };
  useEffect(() => {
    if (city === null) {
      getCurrentLocation();
    } else {
      getSelectWeather(city);
    }
  }, [city]);
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // 화면 전체 높이
        // bgcolor: "white",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={4}
        sx={{
          backgroundColor: "rgba(167, 207, 242, 0.3)",
          borderRadius: "30px",
        }}
      >
        <Grid item>{weather && <WeatherBox weather={weather} />}</Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 0 20px 0",
          }}
        >
          <WeatherBtn cities={cities} setCity={setCity} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
