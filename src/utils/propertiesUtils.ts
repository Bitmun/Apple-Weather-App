import { CurrentData, DailyData, HourlyData } from "../api/types";

type WeatherData = DailyData | HourlyData | CurrentData;

export type PropType = {
  name: string;
  value: number;
};

const propsValidation = (
  initArr: WeatherData,
  key: string,
  propsRes: Array<PropType>,
) => {
  if (initArr[key] instanceof Float32Array) {
    propsRes.push({ name: key, value: initArr[key][0] });
  } else propsRes.push({ name: key, value: initArr[key] });
};

export const getProps = (
  propsToGet: Array<string>,
  data?: WeatherData,
): Array<PropType> | undefined => {
  if (!data) {
    return undefined;
  }
  const propsRes: Array<PropType> = [];

  for (const key in data) {
    propsToGet.forEach((prop) => {
      if (key === prop) {
        propsValidation(data, key, propsRes);
      }
    });
  }

  return propsRes;
};

export const refactorPropName = (data: PropType): PropType => {
  const res = { ...data };
  if (res.name.includes("uv")) {
    res.name = "uv index";
  } else if (res.name.includes("Temp")) {
    res.name = "temperature";
  } else if (res.name.includes("Humid")) {
    res.name = "humidity";
  }
  res.value = +res.value.toFixed();
  return res;
};
