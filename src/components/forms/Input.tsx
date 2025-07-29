'use client';

import { HTMLInputTypeAttribute, useContext } from 'react';
import { FormContext, FormContextProps } from './Form';
import Label from './Label';

export type FieldProps = {
  label?: string;
  name?: string;
  defaultValue?: string;
  value?: string;
};

export type InputProps = {
  pattern?: RegExp | string;
  type?: HTMLInputTypeAttribute;
  defaultChecked?: boolean;
} & FieldProps &
  Partial<FormContextProps>;

// isToggled() - Returns whether a property is set explicitly,
//                or dependently on a field
export const isToggled = (
  context: FormContextProps,
  property: keyof FormContextProps,
) => {
  const propertyValue = context[property];
  const propertyIsBoolean = typeof propertyValue === 'boolean';
  const propertyIsFieldName = typeof propertyValue === 'string';

  if (propertyIsBoolean) {
    return propertyValue;
  } else if (propertyIsFieldName) {
    const fieldValue = context.data[propertyValue];
    const fieldIsToggled = fieldValue === 'true';

    return fieldIsToggled;
  }
};

export default function Input({
  label,
  pattern,
  required,
  disabled,
  visible,
  ...props
}: InputProps) {
  const formContext = useContext(FormContext);
  const context: FormContextProps = {
    required: required ?? formContext.required,
    disabled: disabled ?? formContext.disabled,
    visible: visible ?? formContext.visible,
    data: formContext.data,
  };

  return (
    <Label label={label}>
      <input
        required={context.required}
        disabled={isToggled(context, 'disabled')}
        pattern={String(pattern)}
        {...props}
      />
    </Label>
  );
}
