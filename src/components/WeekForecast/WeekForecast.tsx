import React, { useContext } from "react";
import { DayData } from "../../api/types";
import { DailyForecastEl } from "../DailyForecastEl/DailyForecastEl";
import { WeatherDataContext } from "../../App";
import styles from "./weekForecast.module.css";

export function WeekForecast() {
  const data = useContext(WeatherDataContext);

  const dailyWeather = data?.weatherData.daily;

  return (
    <div className={styles.weekWrapper}>
      <div>10-DAY FORECAST</div>
      {dailyWeather?.time.map((el, index) => {
        const dayWeather: DayData = {
          time: el,
          temperature2mMax: dailyWeather.temperature2mMax[index],
          temperature2mMin: dailyWeather.temperature2mMin[index],
        };
        return <DailyForecastEl key={index} dayWeather={dayWeather} />;
      })}
    </div>
  );
}
