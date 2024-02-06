import { CurrentDayInfo } from "../CurrentDayInfo/CurrentDayInfo";
import { WeekForecast } from "../WeekForecast/WeekForecast";

function MainPart() {
  return (
    <div>
      <WeekForecast />
      <CurrentDayInfo />
    </div>
  );
}

export default MainPart;
