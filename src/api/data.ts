import { Params } from "./types";

export const params: Params = {
  latitude: 40.7143,
  longitude: -74.006,
  current: [
    "temperature_2m",
    "relative_humidity_2m",
    "apparent_temperature",
    "is_day",
    "precipitation",
  ],
  hourly: ["temperature_2m", "relative_humidity_2m"],
  daily: ["temperature_2m_max", "temperature_2m_min"],
  timezone: "auto",
};
