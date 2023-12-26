import { activeTool } from "../states";
import { TOOL } from "../misc";

export function handleToolChange(tool: TOOL) {
  activeTool.name = tool;
  for (const tool_name in TOOL) {
    const element = document.getElementById(tool_name);

    if (element && tool_name !== tool) {
      element.classList.remove("active-tool");
    } else if (element && tool_name === tool) {
      element.classList.add("active-tool");
    }
  }
}
