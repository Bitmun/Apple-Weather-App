import React, { useContext } from "react";
import { WeatherDataContext } from "../../App";
import { filterHourlyData, shorterTimeFormat } from "@utils/dataUtils";
import styles from "./hoursForecast.module.css";
import weatherPicture from "@assets/png/cloud.sun.fill.png";

export function HoursForecast() {
  const data = useContext(WeatherDataContext);

  const hourlyData = data?.weatherData.hourly;

  const currentTime = data?.weatherData?.current.time;

  const filteredData = filterHourlyData(hourlyData, currentTime, 10);
  return (
    <div className={styles.hoursContainer}>
      <p className={styles.hoursWeatherCode}>
        Cloudy conditions from 1AM-9AM, with showers expected at 9AM.
      </p>
      <div className={styles.hoursWrapper}>
        {filteredData.time.map((el, index) => {
          const formattedTime = shorterTimeFormat(el);
          return (
            <div key={el.toISOString()} className={styles.hourWrapper}>
              <p className={styles.timeText}>{formattedTime}</p>
              <img
                alt="HourlyWeatherPicture"
                className={styles.picture}
                src={weatherPicture}
              />
              <p className={styles.tempText}>
                {filteredData.temperature2m[index].toFixed()}°
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
