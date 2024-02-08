import { HoursForecast } from "../HoursForecast/HoursForecast";
import { CurrentProperties } from "../CurrentProperties/CurrentProperties";

export function CurrentDayInfo() {
  return (
    <div>
      <HoursForecast />
      <CurrentProperties />
    </div>
  );
}
