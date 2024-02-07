import React, { useContext, useMemo } from "react";
import { WeatherDataContext } from "../../App";
import { TempBlock } from "../TempBlock/TempBlock";

export function TopTemp() {
  const data = useContext(WeatherDataContext);

  const currentData = data?.weatherData.current;

  const dailyData = data?.weatherData.daily;

  const minTemp = useMemo(
    () => dailyData?.temperature2mMin[0].toFixed(),
    [dailyData],
  );
  const maxTemp = useMemo(
    () => dailyData?.temperature2mMax[0].toFixed(),
    [dailyData],
  );
  const currentTemp = useMemo(
    () => currentData?.temperature2m.toFixed(),
    [currentData],
  );
  return (
    <TempBlock maxTemp={maxTemp} minTemp={minTemp} currentTemp={currentTemp} />
  );
}
