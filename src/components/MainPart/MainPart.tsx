import { CurrentDayInfo } from "../CurrentDayInfo/CurrentDayInfo";
import { WeekForecast } from "../WeekForecast/WeekForecast";
import styles from "./mainPart.module.css";
import { TopTemp } from "../TopTemp/TopTemp";
import cloudsBg from "@assets/mp4/white_clouds_optimized.mp4";
import rainBg from "@assets/mp4/bgRain_optimized.mp4";
import Burger from "../Burger/Burger";
import { useContext } from "react";
import { WeatherDataContext } from "../../App";

export function MainPart() {
  const context = useContext(WeatherDataContext);

  {
    /*Hardcode bg*/
  }

  let bgVideo = cloudsBg;

  if (context?.weatherData.name === "Geneva") bgVideo = rainBg;
  return (
    <div className={styles.mainPartWrapper}>
      <video className={styles.mainBgVideo} src={bgVideo} autoPlay loop muted />
      <Burger />
      <TopTemp />
      <div className={styles.subPart}>
        <WeekForecast />
        <CurrentDayInfo />
      </div>
    </div>
  );
}
