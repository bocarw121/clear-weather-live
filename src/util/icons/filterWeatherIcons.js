import { weatherConditions } from "./iconConditions";
/**
 * Returns a new Icon using the
 * OpenWeatherMap icon and id
 *
 * @param  {string} icon
 * @param  {number} id
 */
export const filterWeatherIcons = (icon, id) => {
  const { thunder200, drizzle300, rain500, snow600, clearAndCloudy800 } =
    weatherConditions(icon, id);

  if (thunder200) return thunder200;
  if (drizzle300) return drizzle300;
  if (rain500) return rain500;
  if (snow600) return snow600;
  if (clearAndCloudy800) return clearAndCloudy800;
  else return null;
};
