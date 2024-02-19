import React from "react";
import styles from "./searchBar.module.css";
import logo from "@assets/png/searchLogo.png";
import { SearchBarProps } from "./types";

export function SearchBar({ handleSearch }: SearchBarProps) {
  return (
    <div className={styles.barWrapper}>
      <img className={styles.logoImg} src={logo} alt="searchLogo" />
      <input
        className={styles.textInput}
        type="text"
        placeholder="Search for a city"
        onChange={(e) => {
          handleSearch(e.target.value.trim().toLowerCase());
        }}
      />
    </div>
  );
}
