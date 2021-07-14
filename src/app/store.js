import { configureStore } from "@reduxjs/toolkit";
import currentWeatherReducer from "../features/CurrentWeather/currentWeatherSlice";

export default configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
  },
});
