import React from "react";
import { getWeekDay } from "../../utils/dataUtils";
import styles from "./dailyForecastEl.module.css";
import weatherPicture from "../../assets/png/cloud.sun.fill.png";
import { DailyForecastElProps } from "./types";

export function DailyForecastEl({ dayWeather }: DailyForecastElProps) {
  return (
    <div className={styles.elWrapper}>
      <p className={styles.weekDay}>{getWeekDay(dayWeather.time)} </p>
      <img
        alt="dailyWeatherPicture"
        className={styles.picture}
        src={weatherPicture}
      />
      <p className={styles.subTemp}>{dayWeather.temperature2mMin.toFixed()}°</p>
      <p className={styles.picture}>.......</p>
      <p className={styles.subTemp}>{dayWeather.temperature2mMax.toFixed()}°</p>
    </div>
  );
}
