import React, { useState } from "react";
import styles from "./burger.module.css";
import { CityCard } from "../CityCard/CityCard";

export default function Burger() {
  const [isOpened, setIsOpened] = useState(false);
  const handelClick = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className={styles.burgerWrapper}>
      {isOpened ? (
        <div className={styles.burger}>
          <button className={styles.closeButton} onClick={handelClick}>
            Close
          </button>
          <CityCard />
        </div>
      ) : (
        <button className={styles.openButton} onClick={handelClick}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </button>
      )}
    </div>
  );
}
