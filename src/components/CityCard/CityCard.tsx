import React, { useContext, useMemo } from "react";
import styles from "./cityCard.module.css";
import { WeatherDataContext } from "../../App";
import { TempBlock } from "../TempBlock/TempBlock";
import { formatTime } from "../../utils/dataUtils";
import videoBg from "../../assets/mp4/bgRain_optimized.mp4";

export function CityCard() {
  const data = useContext(WeatherDataContext);

  const currentData = data?.weatherData.current;

  const dailyData = data?.weatherData.daily;

  const currentTime = formatTime(currentData?.time);

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
    <div className={styles.cardContainer}>
      <video className={styles.bgVideo} src={videoBg} autoPlay loop muted />
      <div className={styles.cardWrapper}>
        <div className={styles.leftPartWrapper}>
          <p className={styles.cityName}>New York</p>
          <p className={styles.cityTime}>{currentTime}</p>
          <p className={styles.weatherCondition}>Partly Cloudy</p>
        </div>
        <TempBlock
          maxTemp={maxTemp}
          minTemp={minTemp}
          currentTemp={currentTemp}
        />
      </div>
    </div>
  );
}
