import React, { memo } from "react";
import styles from "./tempBlock.module.css";

interface TempBlockProps {
  maxTemp?: string;
  minTemp?: string;
  currentTemp?: string;
}

export const TempBlock = memo(
  ({ maxTemp, minTemp, currentTemp }: TempBlockProps) => {
    return (
      <div className={styles.rightPartWrapper}>
        <div className={styles.currentTemperature}>{currentTemp}°</div>
        <div className={styles.subWrapper}>
          <div className={styles.subTemperature}>H:{maxTemp}°</div>
          <div className={styles.subTemperature}>L:{minTemp}°</div>
        </div>
      </div>
    );
  },
);
