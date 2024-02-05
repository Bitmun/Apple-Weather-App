import React from "react";
import { DayData } from "../../api/types";
import { getWeekDay } from "../../utils/dataUtils";
import "./dailyForecastEl.css";

interface DailyForecastElProps {
  dayWeather: DayData;
}

export function DailyForecastEl({ dayWeather }: DailyForecastElProps) {
  return (
    <div className="el-wrapper">
      <p className="week-day">{getWeekDay(dayWeather.time)}: </p>
      <p> {dayWeather.temperature2mMin.toFixed()}°</p>
      <p className="picture">.......</p>
      <p> {dayWeather.temperature2mMax.toFixed()}°</p>
    </div>
  );
}
