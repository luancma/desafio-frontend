import { getWeatherApi } from "../../utils/api";

export const GET_VALUES = "GET_VALUES";

export function receiveValuesSuccess(weather) {
  return {
    type: GET_VALUES,
    weather
  };
}

export const getWeather = value => {
  console.log(value);
  return dispatch => {
    return getWeatherApi(`${value}`)
      .then(value => {
        const weatherReturn = { weather: value.data };
        dispatch(receiveValuesSuccess(weatherReturn));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
