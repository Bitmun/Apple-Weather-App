import React from "react";
import { getWeekDay } from "@utils/dataUtils";
import styles from "./dailyForecastEl.module.css";
import weatherPicture from "@assets/png/cloud.sun.fill.png";
import { DailyForecastElProps } from "./types";

export function DailyForecastEl({ dayWeather }: DailyForecastElProps) {
  {
    /*Не доконца разобрался что здесь надо рисовать так что пока рандом */
  }
  const minMarginLeft = -50;
  const maxMarginLeft = 50;
  const minWidth = 10;
  const maxWidth = 40;

  const randMarginLeft = `${Math.floor(Math.random() * (maxMarginLeft - minMarginLeft + 1)) + minMarginLeft}px`;
  const randWidth = `${Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth}%`;
  return (
    <div className={styles.elWrapper}>
      <div className={styles.leftWrapper}>
        <p className={styles.weekDay}>{getWeekDay(dayWeather.time)} </p>
        <img
          alt="dailyWeatherPicture"
          className={styles.picture}
          src={weatherPicture}
        />
      </div>
      <div className={styles.rightWrapper}>
        <p className={styles.subTemp}>
          {dayWeather.temperature2mMin.toFixed()}°
        </p>
        <div className={styles.weatherBarWrapper}>
          <div
            className={styles.weatherSubBar}
            style={{ marginLeft: randMarginLeft, width: randWidth }}
          ></div>
        </div>
        <p className={styles.subTemp}>
          {dayWeather.temperature2mMax.toFixed()}°
        </p>
      </div>
    </div>
  );
}
