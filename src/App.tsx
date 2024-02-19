import React, { Dispatch, createContext, useEffect, useState } from "react";
import { fetchData } from "./api/utils";
import { WeatherData } from "./api/types";
import { MainPart } from "./components/MainPart/MainPart";
import { SideBar } from "./components/SideBar/SideBar";
import styles from "./App.module.css";
import { NYparams } from "./api/data";

interface WeatherContextType {
  weatherData: WeatherData;
  setWeatherData: Dispatch<React.SetStateAction<WeatherData | undefined>>;
}

export const WeatherDataContext = createContext<WeatherContextType | null>(
  null,
);

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      const URL = process.env.REACT_APP_URL as string;
      const data = await fetchData(URL, NYparams);
      setWeatherData(data);
      setIsLoading(false);
    };

    fetchAllData();
  }, []);

  if (isLoading || !weatherData) {
    return <div>Is loading...</div>;
  }

  return (
    <WeatherDataContext.Provider value={{ weatherData, setWeatherData }}>
      <div className={styles.appWrapper}>
        <div className={styles.appContainer}>
          <MainPart />
          <SideBar />
        </div>
      </div>
    </WeatherDataContext.Provider>
  );
}

export default App;
