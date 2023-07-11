function Forecast({ forecast, selectedDay, celcius }) {
  let currForecast = forecast.forecastday;

  return currForecast.map((dayObj) => {
    if (dayObj.date === selectedDay) {
      return (
        <>
          <p>{selectedDay}</p>
          <ul>
            {dayObj.hour.map((hours, i) => {
              return (
                <li key={hours.time}>
                  <p>{hours.time.split(" ")[1]}</p>
                  <img src={hours.condition.icon} />
                  <p>
                    {celcius === true ? hours.temp_c : hours.temp_f}{" "}
                    {celcius === true ? "°C" : "°F"}
                  </p>
                </li>
              );
            })}
          </ul>
        </>
      );
    }
  });
}

export default Forecast;
