/**
 * Takes in coordinates and an exnpoint
 * and returns the weather data from the
 * respective endpoint
 *
 * @param  {object} coordinates latitude, longitude
 * @param  {string} endpoint
 */
export const fetchWeatherData = async ({ coords, endpoint }) => {
  const { latitude, longitude } = coords;

  // eslint-disable-next-line no-undef
  const response = await fetch(
    `http://192.168.0.111:3000/api/${endpoint}?latitude=${latitude}&longitude=${longitude}`,
  );

  const data = await response.json();

  return data;
};
