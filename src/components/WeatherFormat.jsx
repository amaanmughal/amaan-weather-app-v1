import Forecast from "./Forecast";
import { useState } from "react";

function WeatherFormat({ currWeather, celcius, forecast }) {
  const [selectedDay, setSelectedDay] = useState([]);

  let sunrise = forecast.forecastday[0].astro.sunrise;
  let sunset = forecast.forecastday[0].astro.sunset;
  let currForecast = forecast.forecastday;

  return (
    <>
      <h3>{currWeather.condition.text}</h3>
      <div id="current_weather_container">
        <div id="astro">
          <p>sunrise: {sunrise}</p>
          <p>sunset: {sunset}</p>
        </div>
        <div id="current_weather">
          <img id="weather_icon" src={currWeather.condition.icon} />
          <p>
            {celcius === true ? currWeather.temp_c : currWeather.temp_f}{" "}
            {celcius === true ? "°C" : "°F"}
          </p>
        </div>
        <div id="current_wind_humidity">
          <p>humidity: {currWeather.humidity}%</p>
          <p>wind: {currWeather.wind_kph} kp/h</p>
        </div>
      </div>

      <div id="forecast_days">
        {currForecast.map((dayObj, i) => {
          return (
            <button
              onClick={() => {
                setSelectedDay(`${dayObj.date}`);
              }}
              className="forecast_button"
              key={i}
            >
              <p>{dayObj.date}</p>
              <img src={dayObj.day.condition.icon} />
              <p>{dayObj.day.condition.text}</p>
            </button>
          );
        })}
      </div>

      <Forecast
        forecast={forecast}
        selectedDay={selectedDay}
        celcius={celcius}
      />
    </>
  );
}

export default WeatherFormat;
