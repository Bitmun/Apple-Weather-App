import React, { useContext, useMemo } from "react";
import { WeatherDataContext } from "../../App";
import styles from "./topTemp.module.css";

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
    <div className={styles.topWrapper}>
      <p className={styles.cityName}>New York</p>
      <div className={styles.rightPartWrapper}>
        <p className={styles.currentTemperature}>{currentTemp}°</p>
        <div className={styles.subWrapper}>
          <p className={styles.weatherCode}>Partly Cloudy</p>
          <div className={styles.subTempWrapper}>
            <p className={styles.subTemperature}>H:{maxTemp}°</p>
            <p className={styles.subTemperature}>L:{minTemp}°</p>
          </div>
        </div>
      </div>
    </div>
  );
}
