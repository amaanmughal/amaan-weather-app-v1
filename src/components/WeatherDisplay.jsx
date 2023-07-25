import { useState, useEffect } from "react";
import fetchWeather from "../apis/api";
import LocationFormat from "./LocationFormat";
import WeatherFormat from "./WeatherFormat";
import "./../NotValid.css";
import "./../Weather.css";
import { Link } from "react-router-dom";

function WeatherDisplay(area) {
  const [weather, setWeather] = useState({});
  const [celcius, setCelcius] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [validInput, setValidInput] = useState(true);

  useEffect(() => {
    fetchWeather(area.area).then((data) => {
      if (typeof data === "undefined") {
        setIsLoading(false);
        setValidInput(false);
        return;
      }

      setWeather(data);
      setIsLoading(false);
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

  if (isLoading === true) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  } else if (validInput === false) {
    return (
      <div className="body_container">
        <header>
          <Link className="weather_spot_logo_link" to="/">
            <h1>Weather spot</h1>
          </Link>
        </header>
        <main>
          <p>Please go back and select a valid location</p>
        </main>
      </div>
    );
  }

  return (
    <div className="body_container">
      <header>
        <Link className="weather_spot_logo_link" to="/">
          <h1>Weather spot</h1>
        </Link>
      </header>
      <main id="weather_display_container">
        <div id="choose_temp_measurement">
          <button onClick={(e) => handleCelciusFahrenheit(e)}>°C</button>

          <button onClick={(e) => handleCelciusFahrenheit(e)}>°F</button>
        </div>
        <LocationFormat currLocation={currLocation} forecast={forecast} />
        <WeatherFormat
          currWeather={currWeather}
          celcius={celcius}
          forecast={forecast}
        />
      </main>
    </div>
  );
}

export default WeatherDisplay;
