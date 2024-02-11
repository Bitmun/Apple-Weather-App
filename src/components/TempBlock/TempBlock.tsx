import React, { memo } from "react";
import styles from "./tempBlock.module.css";
import { TempBlockProps } from "./types";

export const TempBlock = memo(
  ({ maxTemp, minTemp, currentTemp }: TempBlockProps) => {
    return (
      <div className={styles.rightPartWrapper}>
        <p className={styles.currentTemperature}>{currentTemp}°</p>
        <div className={styles.subWrapper}>
          <p className={styles.subTemperature}>H:{maxTemp}°</p>
          <p className={styles.subTemperature}>L:{minTemp}°</p>
        </div>
      </div>
    );
  },
);
