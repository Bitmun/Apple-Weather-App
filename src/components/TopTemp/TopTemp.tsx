import React, { useContext, useMemo } from "react";
import { WeatherDataContext } from "../../App";
import styles from "./topTemp.module.css";
import { toast } from "react-toastify";

export function TopTemp() {
  const data = useContext(WeatherDataContext);

  if (!data) {
    toast("Some data error");
    return <div>No data...</div>;
  }

  const { current, daily, name } = data.weatherData;

  const minTemp = useMemo(() => daily?.temperature2mMin[0].toFixed(), [daily]);
  const maxTemp = useMemo(() => daily?.temperature2mMax[0].toFixed(), [daily]);
  const currentTemp = useMemo(
    () => current?.temperature2m.toFixed(),
    [current],
  );

  return (
    <div className={styles.topWrapper}>
      <p className={styles.cityName}>{name}</p>
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
