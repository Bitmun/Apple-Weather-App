import React, { useContext, useMemo } from "react";
import { WeatherDataContext } from "../../App";
import { filterHourlyData } from "@utils/dataUtils";
import styles from "./hoursForecast.module.css";
import HourEl from "../HourEl/HourEl";
import { toast } from "react-toastify";

export function HoursForecast() {
  const data = useContext(WeatherDataContext);

  const hourlyData = useMemo(() => data?.weatherData?.hourly, [data]);
  const currentTime = useMemo(() => data?.weatherData?.current?.time, [data]);

  const filteredData = useMemo(
    () => filterHourlyData(hourlyData, currentTime, 10),
    [data],
  );
  if (!filteredData) {
    toast("no filtered data(");
    return <p>No filtered data</p>;
  }
  return (
    <div className={styles.hoursContainer}>
      <p className={styles.hoursWeatherCode}>
        Cloudy conditions from 1AM-9AM, with showers expected at 9AM.
      </p>
      <div className={styles.hoursWrapper}>
        {filteredData.time.map((el, index) => (
          <HourEl
            el={el}
            temp={filteredData.temperature2m[index]}
            key={el.toISOString()}
          />
        ))}
      </div>
    </div>
  );
}
