import * as Location from "expo-location";
import { GOOGLE_APIKEY } from "@env";

Location.setGoogleApiKey(GOOGLE_APIKEY);

/**
 * Requests user permission and returns
 * and error or a permission granted function
 *
 * @param  {Function} setError
 * @param  {Function} setPermissionGranted
 */
export const locationPermission = async (setError, setPermissionGranted) => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return setError("Permission not granted");
    }
    return setPermissionGranted(true);
  } catch (error) {
    console.log(error.message);
  }
};
/**
 * Returns user coordinates
 *
 */
export const getLocation = async () => {
  try {
    const { coords } = await Location.getLastKnownPositionAsync();

    const { latitude, longitude } = coords;

    return {
      latitude,
      longitude,
    };
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Returns user City
 *
 * @param  {Object} coords
 */
export const getCity = async (coords) => {
  const locationData = await Location.reverseGeocodeAsync(coords);

  return locationData[0].city;
};
