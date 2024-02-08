import { CurrentDayInfo } from "../CurrentDayInfo/CurrentDayInfo";
import { WeekForecast } from "../WeekForecast/WeekForecast";
import styles from "./mainPart.module.css";
import { TopTemp } from "../TopTemp/TopTemp";
import videoBg from "@assets/mp4/white_clouds_optimized.mp4";

export function MainPart() {
  return (
    <div className={styles.mainPartWrapper}>
      <video className={styles.mainBgVideo} src={videoBg} autoPlay loop muted />
      <TopTemp />
      <div className={styles.subPart}>
        <WeekForecast />
        <CurrentDayInfo />
      </div>
    </div>
  );
}
