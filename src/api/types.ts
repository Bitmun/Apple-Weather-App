export type Params = {
  latitude: number;
  longitude: number;
  current: string[];
  hourly: string[];
  daily: string[];
  timezone: string;
};

export type CurrentData = {
  time: Date;
  temperature2m: number;
  relativeHumidity2m: number;
  apparentTemperature: number;
  isDay: number;
  precipitation: number;
};

export type HourlyData = {
  time: Date[];
  temperature2m: Float32Array;
  relativeHumidity2m: Float32Array;
};

export type DailyData = {
  time: Date[];
  temperature2mMax: Float32Array;
  temperature2mMin: Float32Array;
};

export type DayData = {
  time: Date;
  temperature2mMax: number;
  temperature2mMin: number;
};

export type WeatherData = {
  current: CurrentData;
  hourly: HourlyData;
  daily: DailyData;
};
