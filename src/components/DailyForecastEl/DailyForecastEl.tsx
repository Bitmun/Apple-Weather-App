import React from "react";
import { DayData } from "../../api/types";
import { getWeekDay } from "../../utils/dataUtils";
import styles from "./dailyForecastEl.module.css";

interface DailyForecastElProps {
  dayWeather: DayData;
}

export function DailyForecastEl({ dayWeather }: DailyForecastElProps) {
  return (
    <div className={styles.elWrapper}>
      <p className={styles.weekDay}>{getWeekDay(dayWeather.time)}: </p>
      <p> {dayWeather.temperature2mMin.toFixed()}°</p>
      <p className={styles.picture}>.......</p>
      <p> {dayWeather.temperature2mMax.toFixed()}°</p>
    </div>
  );
}
