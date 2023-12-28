import { canvasSize } from "../canvas";
import { Color, TOOL } from "./misc";

export let activeTool: { name: TOOL } = { name: TOOL.pencil };

export function pixelSize() {
  return canvasSize / canvasWidthPixelated;
}

export const canvasWidthPixelated = 50;
export const canvasHeightPixelated = 50;

export const matrix: Color[][] = [];
