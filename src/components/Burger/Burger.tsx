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
        <div className={styles.burgerContainer}>
          <div className={styles.burger}>
            <button onClick={handelClick}>Close</button>
            <CityCard />
          </div>
        </div>
      ) : (
        <button onClick={handelClick}>Open</button>
      )}
    </div>
  );
}
