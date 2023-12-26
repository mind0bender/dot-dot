import { handleToolChange } from ".";
import { canvas, getMousePosition, mousePressed } from "../../canvas";
import { Point, TOOL } from "../misc";
import { activeTool, matrix } from "../states";

export const eraser = document.getElementById(TOOL.eraser);

if (!eraser) {
  throw new Error("eraser is not defined");
}

eraser.addEventListener("click", () => {
  handleToolChange(TOOL.eraser);
});

canvas.addEventListener("mousemove", (e: MouseEvent) => {
  if (!mousePressed || !(activeTool.name === TOOL.eraser)) return;
  const { x: mouseX, y: mouseY }: Point = getMousePosition(e);
  matrix[mouseY][mouseX] = -1;
});
