import { GET_VALUES } from "../actions/weather";

export default function weather(state = {}, action) {
  switch (action.type) {
    case GET_VALUES:
      return {
        ...action.weather
      };
    default:
      return state;
  }
}
