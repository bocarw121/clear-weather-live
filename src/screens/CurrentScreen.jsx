import React, { useEffect, useState, useCallback } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useSelector, useDispatch } from "react-redux";

import withLocation from "../HOC/withLocation";
import {
  fetchCurrentWeather,
  currentSelector,
} from "../features/CurrentWeather/currentWeatherSlice";
import LinearGradientView from "../components/LinearGradientView";
import CurrentWeather from "../features/CurrentWeather";
import Loading from "../components/Loading";
import { getCity } from "../services/Location";

const CurrentScreen = ({ coords, granted }) => {
  const { isLoading, weatherData } = useSelector(currentSelector);
  const dispatch = useDispatch();

  const [appIsReady, setAppIsReady] = useState(false);
  const [city, setCity] = useState(null);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here

        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        dispatch(fetchCurrentWeather({ coords, endpoint: "current" }));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    dispatch(fetchCurrentWeather({ coords, endpoint: "current" }));
  }, [coords.latitude]);

  useEffect(() => {
    currentCity();
  }, [city, isLoading]);

  const currentCity = async () => {
    if (coords.latitude) {
      setCity(await getCity(coords));
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && granted) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, granted]);

  if (!appIsReady) {
    return null;
  }

  if (isLoading && !city) return <Loading size="large" />;

  return (
    <View onLayout={onLayoutRootView}>
      <LinearGradientView>
        <CurrentWeather current={weatherData} city={city} />
      </LinearGradientView>
    </View>
  );
};

export default withLocation(CurrentScreen);
