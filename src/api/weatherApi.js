import { apiUrl } from "./urls";

/**
 * Takes in coordinates and an exnpoint
 * and returns the weather data from the
 * respective endpoint
 *
 * @param  {object} coordinates latitude, longitude
 * @param  {string} endpoint
 */

export const fetchWeatherData = async ({ coords, endpoint }) => {
  // eslint-disable-next-line no-undef
  const response = await fetch(apiUrl({ coords, endpoint }));

  const data = await response.json();

  return data;
};
