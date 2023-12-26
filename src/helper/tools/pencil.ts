import { handleToolChange } from ".";
import { canvas, getMousePosition, mousePressed } from "../../canvas";
import { activeTool, matrix } from "../states";
import { Point, TOOL } from "../misc";
import { currentColor } from "./colorpicker";

export const pencil = document.getElementById(TOOL.pencil);

if (!pencil) {
  throw new Error("pencil is not defined");
}

pencil.addEventListener("click", () => {
  handleToolChange(TOOL.pencil);
});

canvas.addEventListener("mousemove", (e: MouseEvent) => {
  if (!mousePressed || !(activeTool.name === TOOL.pencil)) return;
  const { x: mouseX, y: mouseY }: Point = getMousePosition(e);
  matrix[mouseY][mouseX] = currentColor;
});
