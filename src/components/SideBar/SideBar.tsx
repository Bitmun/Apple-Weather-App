import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { CityCard } from "../CityCard/CityCard";
import "./sideBar.css";

export function SideBar() {
  return (
    <div className="sidebar-wrapper">
      <SearchBar />
      <CityCard />
    </div>
  );
}
