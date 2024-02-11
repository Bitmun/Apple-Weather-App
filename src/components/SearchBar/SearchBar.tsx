import React from "react";
import styles from "./searchBar.module.css";
import logo from "@assets/png/ant-design_search-outlined.png";

export function SearchBar() {
  return (
    <div className={styles.barWrapper}>
      <img className={styles.logoImg} src={logo} alt="searchLogo" />
      <input
        className={styles.textInput}
        type="text"
        placeholder="Search for a city or airport"
      />
    </div>
  );
}
