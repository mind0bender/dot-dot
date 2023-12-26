import { matrix } from "./states";

export enum TOOL {
  pencil = "pencil",
  eraser = "eraser",
  fill = "fill",
}

export type Color = string | -1;

export interface Point {
  x: number;
  y: number;
}

export function defaultColor(i: number, j: number): string {
  return ((i + j) % 2) % 2 ? "#fff" : "#ddd";
}

export function colorAt(point: Point): Color {
  return matrix[point.x][point.y];
}
