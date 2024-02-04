import React, { useEffect, useState } from "react";
import "./App.css";
import CityCard from "./components/CityCard/CityCard";
import { fetchData } from "./api/utils";
import { params, url } from "./api/data";
import { WeatherData } from "./api/types";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchAllData = async () => {
      const data = await fetchData(url, params);
      setWeatherData(data);
      setIsLoading(false);
      console.log(data);
    };

    fetchAllData();
  }, []);

  if (isLoading) {
    return <div>Is loading...</div>;
  }

  return (
    <div className="App">
      <CityCard todayWeather={weatherData?.current} />
    </div>
  );
}

export default App;
