import { PropType, refactorPropName } from "../../utils/propertiesUtils";
import React from "react";
import img from "../../assets/png/cloud.sun.fill.png";
import styles from "./propertyTile.module.css";

type Props = {
  data: PropType<number | string>;
};

export function PropertyTile({ data }: Props) {
  if (typeof data.value === "number") {
    data.value = data.value.toFixed();
  } else {
    refactorPropName(data as PropType<string>);
  }
  return (
    <div className={styles.tileWrapper}>
      <div className={styles.firstRow}>
        <img className={styles.picture} src={img} />
        <div className={styles.name}>{data.name}</div>
      </div>
      <div className={styles.value}>{data.value}</div>
      <div className={styles.weatherCode}>Visibility is good</div>
    </div>
  );
}
