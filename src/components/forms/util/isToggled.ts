import { IFormContext } from '../Form';

// isToggled() - Returns whether a property is set explicitly,
//                or dependently on a field
export const isToggled = (
  propertyValue: boolean | string | undefined,
  context: IFormContext,
) => {
  const propertyIsBoolean = typeof propertyValue === 'boolean';
  const propertyIsFieldName = typeof propertyValue === 'string';

  if (propertyIsBoolean) {
    return propertyValue;
  } else if (propertyIsFieldName) {
    const fieldValue = context?.data?.[propertyValue];
    const fieldIsToggled = fieldValue === 'true';

    return fieldIsToggled;
  }
};
