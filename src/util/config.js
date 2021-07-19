export const apiUrl = ({ coords, endpoint }, mode) => {
  const { latitude, longitude } = coords;
  if (mode === "dev") {
    return `http://192.168.0.111:3000/api/${endpoint}?latitude=${latitude}&longitude=${longitude}&formated=true`;
  }

  return `https://clearweatherlive-backend-stage.herokuapp.com/api/${endpoint}?latitude=${latitude}&longitude=${longitude}&formated=true`;
};

export const iconUrl = (icon, id, mode) => {
  if (mode === "dev") {
    return `http://192.168.0.111:3000/api/images?icon=${icon}&id=${id}.svg`;
  }

  return `https://clearweatherlive-backend-stage.herokuapp.com/api/images?icon=${icon}&id=${id}.svg`;
};
