import React, { useEffect, useState } from "react";

import { getLocation, locationPermission } from "../services/Location";

const withLocation = (Component) => () => {
  const [coords, setCoords] = useState({
    latitude: "",
    longitude: "",
  });

  const [error, setError] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    locationPermission(setError, setPermissionGranted);
  }, []);

  useEffect(() => {
    if (permissionGranted) {
      getCoordinates();
    }
  }, [coords.latitude, permissionGranted]);

  const getCoordinates = async () => {
    try {
      const coordinates = await getLocation();
      const { latitude, longitude } = coordinates;

      setCoords({
        latitude,
        longitude,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Component coords={coords} error={error} granted={permissionGranted} />
  );
};

export default withLocation;
