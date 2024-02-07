import { HourlyData } from "../api/types";

export const getWeekDay = (date: Date) => {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days[date.getDay()];
};

export const filterHourlyData = (
  hourlyData: HourlyData | undefined,
  givenDate: Date | undefined,
  forecastLength: number,
): HourlyData => {
  if (!hourlyData || !givenDate) {
    throw new Error("Ooops...");
  }
  const filteredTime: Date[] = [];
  const filteredTemperature2m = new Float32Array(forecastLength);
  const filteredRelativeHumidity2m = new Float32Array(forecastLength);
  const filteredVisability = new Float32Array(forecastLength);

  for (let i = 0; i < 24; i++) {
    const currentTime = hourlyData.time[i];

    if (currentTime > givenDate && filteredTime.length < 10) {
      filteredTime.push(currentTime);
      filteredTemperature2m.set(
        hourlyData.temperature2m.subarray(i, i + 1),
        filteredTime.length - 1,
      );
      filteredRelativeHumidity2m.set(
        hourlyData.relativeHumidity2m.subarray(i, i + 1),
        filteredTime.length - 1,
      );
      filteredVisability.set(
        hourlyData.visibility.subarray(i, i + 1),
        filteredTime.length - 1,
      );
    }
  }

  return {
    time: filteredTime,
    temperature2m: filteredTemperature2m,
    relativeHumidity2m: filteredRelativeHumidity2m,
    visibility: filteredVisability,
  };
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
