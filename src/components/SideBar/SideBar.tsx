import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { CityCard } from "../CityCard/CityCard";
import styles from "./sideBar.module.css";

export function SideBar() {
  const lat1 = 40.7143;
  const long1 = -74.006;

  const lat2 = 46.2022;
  const long2 = 6.1457;
  return (
    <div className={styles.sidebarWrapper}>
      <SearchBar />
      <CityCard name="New York" latitude={lat1} longitude={long1} />
      <CityCard name="Geneva" latitude={lat2} longitude={long2} />
    </div>
  );
}
