import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWeatherData } from "../../api/weatherApi";

export const fetchCurrentWeather = createAsyncThunk(
  "fetchCurrentWeather",
  fetchWeatherData,
);

const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState: {
    weatherData: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: {
    [fetchCurrentWeather.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCurrentWeather.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.weatherData = action.payload;
    },
    [fetchCurrentWeather.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const currentSelector = (state) => state.currentWeather;

export default currentWeatherSlice.reducer;
