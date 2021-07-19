let NODE_ENV = process.env.NODE_ENV;

/**
 * Returns development or production apiUrl
 *
 * @param  {object} {coords
 * @param  {string} endpoint}
 */
export const apiUrl = ({ coords, endpoint }) => {
  const { latitude, longitude } = coords;
  if (NODE_ENV === "development") {
    return `http://192.168.0.111:3000/api/${endpoint}?latitude=${latitude}&longitude=${longitude}&formated=true`;
  }

  if (NODE_ENV === "production") {
    return `https://clearweatherlive-backend-stage.herokuapp.com/api/${endpoint}?latitude=${latitude}&longitude=${longitude}&formated=true`;
  }
};

/**
 * Returns development or production iconUrl
 *
 * @param  {string} icon
 * @param  {number} id
 */
export const iconUrl = (icon, id) => {
  if (NODE_ENV === "development") {
    return `http://192.168.0.111:3000/api/images?icon=${icon}&id=${id}.svg`;
  }

  if (NODE_ENV === "production") {
    return `https://clearweatherlive-backend-stage.herokuapp.com/api/images?icon=${icon}&id=${id}.svg`;
  }
};
