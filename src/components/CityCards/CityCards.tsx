import React from "react";
import { CityCard } from "../CityCard/CityCard";
import { CityCardsProps } from "./types";

export default function CityCards({ coordsToDisplay }: CityCardsProps) {
  return (
    <>
      {coordsToDisplay.map((el) => (
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
