import { PropType, refactorPropName } from "@utils/propertiesUtils";
import React, { useEffect, useState } from "react";
import img from "@assets/png/cloudSun.png";
import styles from "./propertyTile.module.css";
import { TileProps } from "./types";
import propImg from "@assets/png/uvProp.png";

export function PropertyTile({ data }: TileProps) {
  const [displayData, setDisplayData] = useState<PropType>();

  useEffect(() => {
    const refactoredData = refactorPropName(data);
    setDisplayData(refactoredData);
  }, []);

  return (
    <div className={styles.tileWrapper}>
      <div className={styles.firstRow}>
        <img className={styles.picture} alt="TileWeatherPicture" src={img} />
        <p className={styles.name}>{displayData?.name}</p>
      </div>
      <p className={styles.value}>{displayData?.value}</p>
      <img className={styles.propImg} src={propImg} alt="propImg" />
      <p className={styles.tileWeatherCode}>Visibility is good</p>
    </div>
  );
}
