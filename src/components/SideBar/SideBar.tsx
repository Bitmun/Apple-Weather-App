import React, { useCallback, useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./sideBar.module.css";
import CityCards from "../CityCards/CityCards";
import { coords } from "../../api/data";
import { debounce, filterItems } from "../../utils/searchUtils";

export function SideBar() {
  const [coordsToDisplay, setCoordsToDisplay] = useState(coords);

  const handleSearch = useCallback(
    debounce((inputVal) => {
      if (coords) {
        const filteredData = filterItems(coords, inputVal);
        setCoordsToDisplay(filteredData);
      }
    }, 300),
    [coords],
  );
  return (
    <div className={styles.sidebarWrapper}>
      <SearchBar handleSearch={handleSearch} />
      <CityCards coordsToDisplay={coordsToDisplay} />
    </div>
  );
}
