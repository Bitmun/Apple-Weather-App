import React from "react";
import styles from "./hourEl.module.css";
import weatherPicture from "@assets/png/cloud.sun.fill.png";
import { shorterTimeFormat } from "@utils/dataUtils";

type Props = {
  el: Date;
  temp: number;
};

export default function HourEl({ el, temp }: Props) {
  const formattedTime = shorterTimeFormat(el);
  return (
    <div key={el.toISOString()} className={styles.hourWrapper}>
      <p className={styles.timeText}>{formattedTime}</p>
      <img
        alt="HourlyWeatherPicture"
        className={styles.picture}
        src={weatherPicture}
      />
      <p className={styles.tempText}>{temp.toFixed()}°</p>
    </div>
  );
}
