import { Params } from "./types";
import { getParams } from "./utils";

export type Coords = {
  name: string;
  latitude: number;
  longitude: number;
};

const NYcoords: Coords = {
  name: "New York",
  latitude: 40.7143,
  longitude: -74.006,
};

const GENcoords: Coords = {
  name: "Geneva",
  latitude: 46.2022,
  longitude: 6.1457,
};

export const NYparams: Params = getParams(40.7143, -74.006, "New York");

export const GENparams: Params = getParams(40.7143, -74.006, "Geneva");

export const coords: Array<Coords> = [NYcoords, GENcoords];
