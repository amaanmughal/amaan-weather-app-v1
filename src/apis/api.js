import axios from "axios";

const apiKey = "2cd069af0eb0462b80e173450230407";

const weatherApi = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
});

export const fetchWeather = (area) => {
  return weatherApi
    .get(`/forecast.json?key=${apiKey}&q=${area}&days=3`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export default fetchWeather;
