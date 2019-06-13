import Axios from "axios";

export const getWeatherApi = location => {
  return Axios.post(`https://tambal-weather-api.herokuapp.com/`, {
    location: location
  });
};
