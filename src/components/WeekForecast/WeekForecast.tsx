import React from "react";
import { DailyData, DayData } from "../../api/types";
import { DailyForecastEl } from "../DailyForecastEl/DailyForecastEl";

interface WeekForecastProps {
  dailyWeather: DailyData | undefined;
}

export function WeekForecast({ dailyWeather }: WeekForecastProps) {
  return (
    <div>
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
