import React, { useState } from "react";
import axios from "axios";


const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (citys) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=c0e6f8723a3898030403e82242d1292f`
    );
    setWeatherData(response.data);
  } catch (error) {
    console.log(error);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  fetchWeatherData(event.target.elements[0].value);
};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
