import React from "react";
import { HourlyData } from "../../api/types";
import { filterHourlyData } from "../../utils/dataUtils";
import "./currentDayInfo.css";

interface CurrentDayProps {
  hourlyData: HourlyData | undefined;
  currentTime: Date | undefined;
}

export function CurrentDayInfo({ hourlyData, currentTime }: CurrentDayProps) {
  console.log(currentTime);

  const filteredData = filterHourlyData(hourlyData, currentTime, 10);

  console.log(filteredData);

  return (
    <div className="hours-wrapper">
      {filteredData.time.map((el, index) => {
        const formattedTime = el.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });
        return (
          <div className="hour-wrapper">
            <p>{formattedTime}</p>
            <p>....</p>
            <p>{filteredData.temperature2m[index].toFixed()}</p>
          </div>
        );
      })}
    </div>
  );
}
