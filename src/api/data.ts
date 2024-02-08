import { Params } from "./types";

export const params: Params = {
  latitude: 40.7143,
  longitude: -74.006,
  current: [
    "temperature_2m",
    "relative_humidity_2m",
    "apparent_temperature",
    "weather_code",
  ],

  hourly: ["temperature_2m", "relative_humidity_2m", "visibility"],
  daily: [
    "temperature_2m_max",
    "temperature_2m_min",
    "sunrise",
    "uv_index_max",
  ],
  timezone: "auto",
};
