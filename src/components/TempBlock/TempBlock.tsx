import React from "react";

interface TempBlockProps {
  maxTemp?: string;
  minTemp?: string;
  currentTemp?: string;
}

export function TempBlock({ maxTemp, minTemp, currentTemp }: TempBlockProps) {
  return (
    <div className="right-part-wrapper">
      <div className="current-temperature">{currentTemp}°</div>
      <div className="sub-temperature">H:{maxTemp}°</div>
      <div className="sub-temperature">L:{minTemp}°</div>
    </div>
  );
}
