import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./sideBar.module.css";
import CityCards from "../CityCards/CityCards";

export function SideBar() {
  return (
    <div className={styles.sidebarWrapper}>
      <SearchBar />
      <CityCards />
    </div>
  );
}
