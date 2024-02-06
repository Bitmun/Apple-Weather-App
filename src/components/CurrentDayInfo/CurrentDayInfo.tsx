import React, { useContext } from "react";
import { filterHourlyData, formatTime } from "../../utils/dataUtils";
import styles from "./currentDayInfo.module.css";
import { WeatherDataContext } from "../../App";

export function CurrentDayInfo() {
  const data = useContext(WeatherDataContext);

  const hourlyData = data?.weatherData.hourly;

  const currentTime = data?.weatherData?.current.time;

  const filteredData = filterHourlyData(hourlyData, currentTime, 10);

  return (
    <div className={styles.hoursWrapper}>
      {filteredData.time.map((el, index) => {
        const formattedTime = formatTime(el);
        return (
          <div key={el.toISOString()} className={styles.hourWrapper}>
            <p>{formattedTime}</p>
            <p>....</p>
            <p>{filteredData.temperature2m[index].toFixed()}</p>
          </div>
        );
      })}
    </div>
  );
}
