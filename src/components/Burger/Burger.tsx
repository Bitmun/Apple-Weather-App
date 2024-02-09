import React, { useState } from "react";
import styles from "./burger.module.css";
import CityCards from "../CityCards/CityCards";
import { coords } from "../../api/data";

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
          <CityCards coordsToDisplay={coords} />
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
