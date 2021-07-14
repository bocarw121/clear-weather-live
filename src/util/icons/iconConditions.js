import icons from "./icons";
/**
 * Returns a new icon for all
 * the 200 ids that meet the condition
 *
 * @param  {string} newIcon
 * @param  {string} icon
 * @param  {number} id
 */
const condition200 = (newIcon, icon, id) => {
  switch (true) {
    case id >= 200 && id <= 232 && icon === "11d":
    case id >= 200 && id <= 232 && icon === "11n":
      newIcon = icons.thunder;
      break;
    default:
      newIcon = null;
      break;
  }
  return newIcon;
};

/**
 * Returns a new icon for all
 * the 300 ids that meet the condition
 *
 * @param  {string} newIcon
 * @param  {string} icon
 * @param  {number} id
 */
const condition300 = (newIcon, icon, id) => {
  switch (true) {
    case id >= 300 && id <= 321 && icon === "09d":
    case id >= 300 && id <= 321 && icon === "09n":
      newIcon = icons.rainy.five;
      break;
    default:
      newIcon = null;
      break;
  }
  return newIcon;
};

/**
 * Returns a new icon for all
 * the 500 ids that meet the condition
 *
 * @param  {string} newIcon
 * @param  {string} icon
 * @param  {number} id
 */
const condition500 = (newIcon, icon, id) => {
  switch (true) {
    case id === 500 && icon === "10d":
    case id === 501 && icon === "10d": // mix of sun and rain
    case id === 500 && icon === "10n":
    case id === 501 && icon === "10n":
      newIcon = icons.rainy.two;
      break;
    case id >= 502 && id <= 504 && icon === "10d": // sun and rain higher Int
      newIcon = icons.rainy.three;
      break;
    case id >= 502 && id <= 504 && icon === "10n": // night rain
      newIcon = icons.rainy.six;
      break;
    case id === 511 && icon === "13d": // Freezing rain
    case id === 511 && icon === "13n":
      newIcon = icons.snowy.five;
      break;
    case id === 520 && icon === "09d": // Rain
    case id === 521 && icon === "09d":
    case id === 520 && icon === "09n": // Rain
    case id === 521 && icon === "09n":
      newIcon = icons.rainy.four;
      break;
    case id === 522 && icon === "09d": // Rain
    case id === 531 && icon === "09d":
    case id === 522 && icon === "09n": // Rain
    case id === 531 && icon === "09n":
      newIcon = icons.rainy.six;
      break;
    default:
      newIcon = null;
      break;
  }
  return newIcon;
};

/**
 * Returns a new icon for all
 * the 600 ids that meet the condition
 *
 * @param  {string} newIcon
 * @param  {string} icon
 * @param  {number} id
 */
const condition600 = (newIcon, icon, id) => {
  switch (true) {
    case id === 600 && icon === "13d":
    case id === 612 && icon === "13d": // light intensity snow
    case id === 615 && icon === "13d":
    case id === 620 && icon === "13d":
    case id === 600 && icon === "13n":
    case id === 612 && icon === "13n":
    case id === 615 && icon === "13n":
    case id === 620 && icon === "13n":
      newIcon = icons.snowy.four;
      break;
    case id === 601 && icon === "13d":
    case id === 611 && icon === "13d": // Regular intesity snow
    case id === 613 && icon === "13d":
    case id === 616 && icon === "13d":
    case id === 621 && icon === "13d":
    case id === 601 && icon === "13n":
    case id === 611 && icon === "13n":
    case id === 613 && icon === "13n":
    case id === 616 && icon === "13n":
    case id === 621 && icon === "13n":
      newIcon = icons.snowy.five;
      break;
    case id === 602 && icon === "13d":
    case id === 622 && icon === "13d": // heavy intesity snow
    case id === 602 && icon === "13n":
    case id === 622 && icon === "13n":
      newIcon = icons.snowy.six;
      break;
    default:
      newIcon = null;
      break;
  }
  return newIcon;
};

/**
 * Returns a new icon for all
 * the 800 ids that meet the condition
 *
 * @param  {string} newIcon
 * @param  {string} icon
 * @param  {number} id
 */
const condition800 = (newIcon, icon, id) => {
  switch (true) {
    case id === 800 && icon === "01d":
      newIcon = icons.clear.day;
      break;
    case id === 800 && icon === "01n":
      newIcon = icons.clear.night;
      break;
    case id === 801 && icon === "02d": // mix of sun and clouds
      newIcon = icons.cloudyDay.one;
      break;
    case id === 801 && icon === "02n": // mix of moon and clouds
      newIcon = icons.cloudyNight.one;
      break;
    case id === 802 && icon === "03d": // Cloudy day
    case id === 803 && icon === "03d": //
    case id === 804 && icon === "04d": //
      newIcon = icons.cloudy;
      break;
    case id === 802 && icon === "03n": // Cloudy night
    case id === 803 && icon === "03n": //
    case id === 804 && icon === "04n": //
      newIcon = icons.cloudy;
      break;
    default:
      newIcon = null;
      break;
  }
  return newIcon;
};

/**
 * Returns an object with all the conditions
 *
 * @param  {string} icon
 * @param  {number} id
 */
export const weatherConditions = (icon, id) => {
  let newIcon;
  return {
    thunder200: condition200(newIcon, icon, id),
    drizzle300: condition300(newIcon, icon, id),
    rain500: condition500(newIcon, icon, id),
    snow600: condition600(newIcon, icon, id),
    clearAndCloudy800: condition800(newIcon, icon, id),
  };
};
