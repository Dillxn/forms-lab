import { IFormContext } from '../../Form';
import { isToggled } from './isToggled';

export const isDisabled = (context: IFormContext) =>
  Boolean(
    isToggled('disabled', context) ||
      (context.enabled && !isToggled('enabled', context)),
  );
