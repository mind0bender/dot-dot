import { Color } from "../misc";

export let currentColor: Color = "#000";

export const colorPicker = document.getElementById("color_picker");
export const currentColorPicked = document.getElementById(
  "current_color_picked"
);
export const currentColorPickedCode = document.getElementById(
  "current_color_picked_code"
);

if (!colorPicker) {
  throw new Error("colorPicker is not defined");
}

if (!currentColorPicked) {
  throw new Error("currentColorPicked is not defined");
}

if (!currentColorPickedCode) {
  throw new Error("currentColorPickedCode is not defined");
}

colorPicker.addEventListener("input", (e: Event) => {
  currentColor = (e.target as HTMLInputElement)!.value;
  currentColorPicked.style.backgroundColor = currentColor;
  currentColorPickedCode.innerText = currentColor;
});
