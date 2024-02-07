import { CurrentDayInfo } from "../CurrentDayInfo/CurrentDayInfo";
import { WeekForecast } from "../WeekForecast/WeekForecast";
import styles from "./mainPart.module.css";
import bgPicture from "@assets/png/bg.png";
import { TopTemp } from "../TopTemp/TopTemp";

export function MainPart() {
  return (
    <div
      className={styles.mainPartWrapper}
      style={{
        backgroundImage: `url(${bgPicture})`,
      }}
    >
      <TopTemp />
      <div className={styles.subPart}>
        <WeekForecast />
        <CurrentDayInfo />
      </div>
    </div>
  );
}
