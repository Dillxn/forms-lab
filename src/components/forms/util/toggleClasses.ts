import { IFormContext } from '../Form';
import { isToggled } from './isToggled';

export const toggleClasses = (context: IFormContext) =>
  [
    context.hidden && isToggled('hidden', context) ? 'hidden' : '',
    context.visible && !isToggled('visible', context) ? 'hidden' : '',
  ].join(' ');
