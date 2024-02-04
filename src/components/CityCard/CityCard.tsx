import React from "react";
import "./cityCard.css";
import { CurrentData } from "../../api/types";

interface CityCardProps {
  todayWeather: CurrentData | undefined;
}

export function CityCard({ todayWeather }: CityCardProps) {
  const formattedTime = todayWeather?.time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="card-wrapper">
      <div className="left-part-wrapper">
        <p className="city-name">New York</p>
        <p className="city-time">{formattedTime}</p>
      </div>
      <div className="right-part-wrapper">
        <div className="current-temperature">
          {todayWeather?.temperature2m.toFixed()}
        </div>
      </div>
    </div>
  );
}
