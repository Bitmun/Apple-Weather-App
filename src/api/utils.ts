import { fetchWeatherApi } from "openmeteo";
import { Params, WeatherData } from "./types";

export const fetchData = async (
  url: string,
  params: Params,
): Promise<WeatherData> => {
  const responses = await fetchWeatherApi(url, params);

  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  const response = responses[0];

  const utcOffsetSeconds = response.utcOffsetSeconds();

  const current = response.current()!;
  const hourly = response.hourly()!;
  const daily = response.daily()!;

  return {
    name: params.name,
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      relativeHumidity2m: current.variables(1)!.value(),
      apparentTemperature: current.variables(2)!.value(),
      isDay: current.variables(3)!.value(),
      precipitation: current.variables(4)!.value(),
      weatherCode: current.variables(5)!.value(),
      windSpeed10m: current.variables(6)!.value(),
    },
    hourly: {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval(),
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
      visibility: hourly.variables(2)!.valuesArray()!,
    },
    daily: {
      time: range(
        Number(daily.time()),
        Number(daily.timeEnd()),
        daily.interval(),
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2mMax: daily.variables(0)!.valuesArray()!,
      temperature2mMin: daily.variables(1)!.valuesArray()!,
      sunrise: daily.variables(2)!.valuesInt64(0)!,
      uvIndexMax: daily.variables(3)!.valuesArray()!,
    },
  };
};

export const getParams = (
  latitude: number,
  longitude: number,
  name: string,
): Params => {
  return {
    name: name,
    latitude: latitude,
    longitude: longitude,
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
};
