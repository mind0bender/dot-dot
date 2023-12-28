import { Color } from "./misc";
import { canvasHeightPixelated, canvasWidthPixelated, matrix } from "./states";

export const filename_div = document.getElementById("filename");
export const save_btn = document.getElementById("save");

if (!filename_div) {
  throw new Error("filename_div is not defined");
}
if (!save_btn) {
  throw new Error("save_btn is not defined");
}

let filename = localStorage.getItem("last filename") || "";

if (filename) {
  const savedMatrix = localStorage.getItem(filename);
  if (savedMatrix) {
    const parsedMatrix = JSON.parse(savedMatrix);

    if (
      parsedMatrix.length === canvasHeightPixelated &&
      parsedMatrix[0].length === canvasWidthPixelated
    ) {
      matrix.push(...parsedMatrix);
    }
  } else {
    for (let j = 0; j < canvasHeightPixelated; j++) {
      const row: Color[] = [];
      for (let i = 0; i < canvasWidthPixelated; i++) {
        row.push(-1);
      }
      matrix.push(row);
    }
  }
} else {
  for (let j = 0; j < canvasHeightPixelated; j++) {
    const row: Color[] = [];
    for (let i = 0; i < canvasWidthPixelated; i++) {
      row.push(-1);
    }
    matrix.push(row);
  }
}

filename_div.addEventListener("keydown", () => {
  filename = filename_div.innerHTML;
  console.log(filename);
});

save_btn.addEventListener("click", () => {
  localStorage.setItem("last filename", filename);
  localStorage.setItem(filename, JSON.stringify(matrix));
});
