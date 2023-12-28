import "./style.css";

import "./helper/tools";
import "./helper/tools/pencil";
import "./helper/tools/eraser";
import "./helper/tools/fill";
import "./helper/tools/download";
import "./helper/filename";

import "./canvas";
import { canvas, ctx } from "./canvas";
import {
  canvasHeightPixelated,
  canvasWidthPixelated,
  matrix,
  pixelSize,
} from "./helper/states";
import { Color, defaultColor } from "./helper/misc";

export const loop: {
  start: () => void;
  paused: boolean;
  stop: () => void;
} = {
  paused: false,
  start: () => {
    loop.paused = false;
    draw({ transparent: false });
  },
  stop: () => {
    loop.paused = true;
  },
};

export function draw({ transparent }: { transparent: boolean }) {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let j = 0; j < canvasHeightPixelated; j++) {
    for (let i = 0; i < canvasWidthPixelated; i++) {
      const currentColor: Color = matrix[j][i];
      if (currentColor !== -1) {
        ctx.fillStyle = currentColor;
      } else if (!transparent) {
        ctx.fillStyle = defaultColor(i, j);
      } else {
        continue;
      }
      ctx.fillRect(
        i * pixelSize(),
        j * pixelSize(),
        pixelSize() + 1,
        pixelSize() + 1
      );
    }
  }
  if (!loop.paused) requestAnimationFrame(() => draw({ transparent }));
}

loop.start();
