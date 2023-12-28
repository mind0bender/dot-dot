import { pixelSize } from "./helper/states";
import { Point } from "./helper/misc";

export const canvas = document.getElementById(
  "base_canvas"
) as HTMLCanvasElement;

if (!canvas) {
  throw new Error("canvas is not defined");
}

export let canvasSize =
  Math.min(window.innerWidth - 80 * 2, window.innerHeight - 80) - 80;

window.addEventListener("resize", () => {
  canvasSize =
    Math.min(window.innerWidth - 80 * 2, window.innerHeight - 80) - 80;
  canvas.width = canvasSize;
  canvas.height = canvasSize;
});

canvas.width = canvasSize;
canvas.height = canvasSize;

export const ctx = canvas.getContext("2d");

if (!ctx) {
  throw new Error("ctx is not defined");
}

ctx.strokeStyle = `rgba(1, 1, 1, 0)`;

export function getMousePosition(e: MouseEvent): Point {
  const boundingClientRect = canvas.getBoundingClientRect();

  const mouseX = Math.floor(
    (e.clientX - boundingClientRect.left) / pixelSize()
  );
  const mouseY = Math.floor((e.clientY - boundingClientRect.top) / pixelSize());
  return {
    x: mouseX,
    y: mouseY,
  };
}

export let mousePressed: boolean = false;

canvas.addEventListener("mousedown", () => {
  mousePressed = true;
});
canvas.addEventListener("mouseup", () => {
  mousePressed = false;
});
