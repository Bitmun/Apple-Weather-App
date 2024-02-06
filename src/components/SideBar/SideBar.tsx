import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { CityCard } from "../CityCard/CityCard";
import styles from "./sideBar.module.css";

export function SideBar() {
  return (
    <div className={styles.sidebarWrapper}>
      <SearchBar />
      <CityCard />
    </div>
  );
}
