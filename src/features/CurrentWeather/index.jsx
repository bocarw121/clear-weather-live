import React from "react";

import City from "../../components/City";
import InfoItem from "../../components/InfoItem";
import InfoItemCard from "../../components/InfoItemCard";
import InfoItemContainer from "../../components/InfoItemContainer";
import Loading from "../../components/Loading";
import TemperatureContainer from "../../components/TemperatureContainer";
import TemperatureItem from "../../components/TemperatureItem";
import WeatherIcon from "../../components/WeatherIcon";
import WeatherText from "../../components/WeatherText";

import Date from "./component/Date";

const CurrentWeather = ({ current, city }) => {
  const { infoData, weather } = current;

  if (!weather) return <Loading size="large" />;
  const { temp, id, date, icon, RealFeel, description } = weather;

  return (
    <>
      <Date time={date} />
      <TemperatureContainer type="current">
        <City city={city} />
        <WeatherIcon icon={icon} id={id} />
        <WeatherText text={description} fontSize={24} color="white" />
        <TemperatureItem temp={temp} type="temp" />
        <TemperatureItem feelsLike={RealFeel} type="RealFeel" />
      </TemperatureContainer>
      <InfoItemContainer>
        {infoData.map((info) => {
          return (
            <InfoItemCard key={info.id}>
              <InfoItem info={info} />
            </InfoItemCard>
          );
        })}
      </InfoItemContainer>
    </>
  );
};

export default CurrentWeather;
