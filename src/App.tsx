import React, { createContext, useEffect, useState } from "react";
import { fetchData } from "./api/utils";
import { params } from "./api/data";
import { WeatherData } from "./api/types";
import MainPart from "./components/MainPart/MainPart";
import { SideBar } from "./components/SideBar/SideBar";
import styles from "./App.module.css";

interface WeatherContextType {
  weatherData: WeatherData;
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
      const data = await fetchData(URL, params);
      setWeatherData(data);
      setIsLoading(false);
    };

    fetchAllData();
  }, []);

  if (isLoading || !weatherData) {
    return <div>Is loading...</div>;
  }

  return (
    <WeatherDataContext.Provider value={{ weatherData }}>
      <div className={styles.appWrapper}>
        <MainPart />
        <SideBar />
      </div>
    </WeatherDataContext.Provider>
  );
}

export default App;
