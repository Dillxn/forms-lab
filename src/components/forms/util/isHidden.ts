import { IFormContext } from "../Form";
import { isToggled } from "./isToggled";

export const isHidden = (context: IFormContext) =>
  (context.hidden && isToggled('hidden', context)) ||
  (context.visible && !isToggled('visible', context));
