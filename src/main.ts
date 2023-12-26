import "./style.css";

import "./helper/tools";
import "./helper/tools/pencil";
import "./helper/tools/eraser";
import "./helper/tools/fill";

import "./canvas";
import { canvas, ctx } from "./canvas";
import {
  canvasHeightPixelated,
  canvasWidthPixelated,
  matrix,
  pixelSize,
} from "./helper/states";
import { Color, defaultColor } from "./helper/misc";

function draw() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let j = 0; j < canvasHeightPixelated; j++) {
    for (let i = 0; i < canvasWidthPixelated; i++) {
      const currentColor: Color = matrix[j][i];
      if (currentColor !== -1) {
        ctx.fillStyle = currentColor;
      } else {
        ctx.fillStyle = defaultColor(i, j);
      }
      ctx.fillRect(i * pixelSize(), j * pixelSize(), pixelSize(), pixelSize());
    }
  }
  requestAnimationFrame(draw);
  // setInterval(draw, 1000 / 60);
}

draw();
