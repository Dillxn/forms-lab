import { IFormContext } from '../Form';
import { isToggled } from './isToggled';

export const isHidden = (context: IFormContext) =>
  Boolean(
    (context.hidden && isToggled('hidden', context)) ||
      (context.visible && !isToggled('visible', context)),
  );
