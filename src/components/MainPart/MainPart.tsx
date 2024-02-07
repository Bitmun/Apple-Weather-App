import { CurrentDayInfo } from "../CurrentDayInfo/CurrentDayInfo";
import { WeekForecast } from "../WeekForecast/WeekForecast";
import styles from "./mainPart.module.css";
import bgPicture from "../../assets/png/bg.png";

function MainPart() {
  return (
    <div
      className={styles.mainPartWrapper}
      style={{
        backgroundImage: `url(${bgPicture})`,
      }}
    >
      <WeekForecast />
      <CurrentDayInfo />
    </div>
  );
}

export default MainPart;
