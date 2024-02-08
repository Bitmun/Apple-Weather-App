import { Params } from "./types";
import { getParams } from "./utils";

const NYcoords = {
  name: "New York",
  latitude: 40.7143,
  longitude: -74.006,
};

const GENcoords = {
  name: "Geneva",
  latitude: 46.2022,
  longitude: 6.1457,
};

export const NYparams: Params = getParams(40.7143, -74.006);

export const GENparams: Params = getParams(40.7143, -74.006);

export const coords = [NYcoords, GENcoords];
