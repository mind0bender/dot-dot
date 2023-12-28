import { canvas } from "../../canvas";
import { draw } from "../../main";

export const download = document.getElementById("download");

if (!download) {
  throw new Error("download is not defined");
}

download.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "pixel-art.png";
  draw({ transparent: true });
  link.href = canvas.toDataURL("image/png");
  link.click();
});
