import { HourlyData } from "../api/types";

export const getWeekDay = (date: Date) => {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days[date.getDay()];
};

export const filterHourlyData = (
  hourlyData: HourlyData | undefined,
  givenDate: Date | undefined,
  forecastLength: number,
): HourlyData | null => {
  if (!hourlyData || !givenDate) {
    return null;
  }

  for (let i = 0; i < 24; i++) {
    const currentTime = hourlyData.time[i];
    if (currentTime > givenDate) {
      const filteredTime = hourlyData.time.slice(i, i + forecastLength);
      const filteredTemperature2m = hourlyData.temperature2m.slice(
        i,
        i + forecastLength,
      );
      const filteredRelativeHumidity2m = hourlyData.relativeHumidity2m.slice(
        i,
        i + forecastLength,
      );
      const filteredVisability = hourlyData.visibility.slice(
        i,
        i + forecastLength,
      );
      return {
        time: filteredTime,
        temperature2m: filteredTemperature2m,
        relativeHumidity2m: filteredRelativeHumidity2m,
        visibility: filteredVisability,
      };
    }
  }
  return null;
};

export const formatTime = (date?: Date) => {
  if (!date) {
    return "No date";
  }
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const shorterTimeFormat = (date?: Date) => {
  if (!date) {
    return "No date";
  }
  let hours = date.getHours();
  let period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return hours + period;
};
