import React, { useContext } from "react";
import { WeatherDataContext } from "../../App";
import styles from "./currentProperties.module.css";
import { PropertyTile } from "../PropertyTile/PropertyTile";
import { getProps } from "@utils/propertiesUtils";
import { toast } from "react-toastify";

export function CurrentProperties() {
  const data = useContext(WeatherDataContext);

  if (!data?.weatherData) {
    toast("No weather data");
    return <div>No weather data...</div>;
  }

  const { current, daily, hourly } = data?.weatherData;

  const hourlyPropsToGet = ["visibility"];
  const dailyPropsToGet = ["uvIndexMax"];
  const currentPropsToGet = ["relativeHumidity2m", "apparentTemperature"];

  const hourlyProps = getProps(hourlyPropsToGet, hourly);
  const dailyProps = getProps(dailyPropsToGet, daily);
  const currentProps = getProps(currentPropsToGet, current);

  if (!currentProps || !hourlyProps) {
    toast("Some props error");
    return <div>No data...</div>;
  }

  const allProps = dailyProps?.concat(currentProps).concat(hourlyProps);

  return (
    <div className={styles.propertiesWrapper}>
      {allProps?.map((prop) => <PropertyTile key={prop.value} data={prop} />)}
    </div>
  );
}
