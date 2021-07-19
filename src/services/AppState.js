import { useEffect, useState, useRef } from "react";
import { AppState as Appstate_ } from "react-native";
/**
 * Returns an array with the device state
 *
 */
export const Appstate = () => {
  const appState = useRef(Appstate_.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    Appstate_.addEventListener("change", handleAppStateChange);

    return () => {
      Appstate_.removeEventListener("change", handleAppStateChange);
    };
  }, []);

  const handleAppStateChange = (nextAppState) => {
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log("AppState", appState.current);
  };

  return [appStateVisible];
};
