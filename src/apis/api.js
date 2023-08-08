import axios from "axios";

const apiKey2 = import.meta.env.VITE_API_KEY;

const weatherApi = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
});

export const fetchWeather = (area) => {
  return weatherApi
    .get(`/forecast.json?key=${apiKey2}&q=${area}&days=3`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export default fetchWeather;
