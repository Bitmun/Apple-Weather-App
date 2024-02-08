import { coords } from "../../api/data";
import React from "react";
import { CityCard } from "../CityCard/CityCard";

export default function CityCards() {
  return (
    <>
      {coords.map((el) => (
        <CityCard
          key={el.latitude}
          name={el.name}
          latitude={el.latitude}
          longitude={el.longitude}
        />
      ))}
    </>
  );
}
