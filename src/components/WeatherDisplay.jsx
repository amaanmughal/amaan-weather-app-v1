import { useState, useEffect } from "react";
import fetchWeather from "../apis/api";
import LocationFormat from "./LocationFormat";
import WeatherFormat from "./WeatherFormat";
import { Link } from "react-router-dom";

function WeatherDisplay(area) {
  const [weather, setWeather] = useState({});
  const [celcius, setCelcius] = useState(true);

  useEffect(() => {
    fetchWeather(area.area).then((data) => {
      setWeather(data);
    });
  }, []);

  let weatherArr = Object.values(weather);

  let currLocation = weatherArr[0];
  let currWeather = weatherArr[1];
  let forecast = weatherArr[2];

  function handleCelciusFahrenheit(e) {
    if (e.target.innerHTML === "°C") {
      setCelcius(true);
    } else if (e.target.innerHTML === "°F") {
      setCelcius(false);
    }
  }

  if (weatherArr.length === 0) {
    return <></>;
  }
  return (
    <main>
      <header>
        <Link to="/">
          <h1>Weather spot</h1>
        </Link>
      </header>
      <div>
        <button onClick={(e) => handleCelciusFahrenheit(e)}>°C</button>
        <p>|</p>
        <button onClick={(e) => handleCelciusFahrenheit(e)}>°F</button>
      </div>
      <LocationFormat currLocation={currLocation} forecast={forecast} />
      <WeatherFormat
        currWeather={currWeather}
        celcius={celcius}
        forecast={forecast}
      />
    </main>
  );
}

export default WeatherDisplay;
