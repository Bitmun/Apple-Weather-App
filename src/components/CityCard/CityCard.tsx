import React, { useContext } from "react";
import "./cityCard.css";
import { WeatherDataContext } from "../../App";
import { TempBlock } from "../TempBlock/TempBlock";

export function CityCard() {
  const data = useContext(WeatherDataContext);

  const currentData = data?.weatherData.current;

  const dailyData = data?.weatherData.daily;

  const currentTime = currentData?.time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const minTemp = dailyData?.temperature2mMin[0].toFixed();

  const maxTemp = dailyData?.temperature2mMax[0].toFixed();

  const currentTemp = currentData?.temperature2m.toFixed();

  return (
    <div className="card-wrapper">
      <div className="left-part-wrapper">
        <p className="city-name">New York</p>
        <p className="city-time">{currentTime}</p>
      </div>
      <TempBlock
        maxTemp={maxTemp}
        minTemp={minTemp}
        currentTemp={currentTemp}
      />
    </div>
  );
}
