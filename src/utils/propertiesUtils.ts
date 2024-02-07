import { CurrentData, DailyData, HourlyData } from "../api/types";

type WeatherData = DailyData | HourlyData | CurrentData;

export type PropType<T> = {
  name: string;
  value: T;
};

const propsValidation = (
  initArr: WeatherData,
  key: string,
  propsRes: Array<PropType<number | string>>,
) => {
  if (initArr[key] instanceof Float32Array) {
    propsRes.push({ name: key, value: initArr[key][0] });
  } else propsRes.push({ name: key, value: initArr[key] });
};

export const getProps = (
  propsToGet: Array<string>,
  data?: WeatherData,
): Array<PropType<number | string>> | undefined => {
  if (!data) {
    return undefined;
  }
  const propsRes: Array<PropType<number | string>> = [];

  for (const key in data) {
    propsToGet.forEach((prop) => {
      if (key === prop) {
        propsValidation(data, key, propsRes);
      }
    });
  }

  return propsRes;
};

export const refactorPropName = (data: PropType<string>) => {
  if (data.name.includes("uv")) {
    data.name = "uv index";
  } else if (data.name.includes("Temp")) {
    data.name = "temperature";
  } else if (data.name.includes("Humid")) {
    data.name = "humidity";
  }
};
