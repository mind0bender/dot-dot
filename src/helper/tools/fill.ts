import { handleToolChange } from ".";
import { canvas, getMousePosition } from "../../canvas";
import { Point, TOOL, colorAt } from "../misc";
import {
  activeTool,
  canvasHeightPixelated,
  canvasWidthPixelated,
  matrix,
} from "../states";
import { currentColor } from "./colorpicker";

export const fill = document.getElementById(TOOL.fill);

if (!fill) {
  throw new Error("fill is not defined");
}

fill.addEventListener("click", () => {
  handleToolChange(TOOL.fill);
});

canvas.addEventListener("click", (e: MouseEvent) => {
  if (!(activeTool.name === TOOL.fill)) return;
  const start: Point = getMousePosition(e);
  const targetColor = colorAt(start);
  const toFill = [start];
  while (toFill.length > 0) {
    const current = toFill.pop() as Point;
    matrix[current.y][current.x] = currentColor;
    for (let j = -1; j <= 1; j++) {
      for (let i = -1; i <= 1; i++) {
        if (i === 0 && j === 0) continue;
        const x = current.x + i;
        const y = current.y + j;
        if (
          x < 0 ||
          x >= canvasWidthPixelated ||
          y < 0 ||
          y >= canvasHeightPixelated
        )
          continue;
        if (matrix[y][x] === targetColor) {
          toFill.push({ x, y });
        }
      }
    }
  }
});
