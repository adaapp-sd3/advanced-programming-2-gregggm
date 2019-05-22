import { Produce } from "../enums";

export type Pos = {
  x: number;
  y: number;
};

export type Size = {
  w: number;
  h: number;
};

export type Vel = {
  x: number;
  y: number;
};

export type WeatherItem = {
  x: number;
  y: number;
  size: number;
};

export type Inventory = {
  [Produce.BEEF]: number;
  [Produce.MILK]: number;
  [Produce.LAMB]: number;
  [Produce.CORN]: number;
  [Produce.STRAW]: number;
  [Produce.BREAD]: number;
  [Produce.WOOL]: number;
  [Produce.EGGS]: number;
  [Produce.CHICKEN]: number;
};
