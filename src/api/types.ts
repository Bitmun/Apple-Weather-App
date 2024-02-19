export type Params = {
  name: string;
  latitude: number;
  longitude: number;
  current: string[];
  hourly: string[];
  daily: string[];
  timezone: string;
};

export type CurrentData = {
  [key: string]: any;
  time: Date;
  temperature2m: number;
  relativeHumidity2m: number;
  apparentTemperature: number;
  isDay: number;
  precipitation: number;
  weatherCode: number;
  windSpeed10m: number;
};

export type HourlyData = {
  [key: string]: any;
  time: Date[];
  temperature2m: Float32Array;
  relativeHumidity2m: Float32Array;
  visibility: Float32Array;
};

export type DailyData = {
  [key: string]: any;
  time: Date[];
  temperature2mMax: Float32Array;
  temperature2mMin: Float32Array;
  sunrise: BigInt;
  uvIndexMax: Float32Array;
};

export type DayData = {
  time: Date;
  temperature2mMax: number;
  temperature2mMin: number;
};

export type WeatherData = {
  name: string;
  current: CurrentData;
  hourly: HourlyData;
  daily: DailyData;
};
