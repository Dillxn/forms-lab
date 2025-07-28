import { HTMLInputTypeAttribute, useContext } from "react";
import { FieldProps, FormContext, FormContextProps } from "./Form";
import Label from "./Label";

export type InputProps = {
  pattern?: RegExp | string;
  type?: HTMLInputTypeAttribute;
  checked?: boolean;
} & FieldProps &
  Partial<FormContextProps>;

export const isToggled = (
  context: FormContextProps,
  property: keyof FormContextProps
) => {
  if (typeof context[property] === "boolean") {
    return context[property];
  } else if (typeof context[property] === "string") {
    return context.data[context[property]] === "true";
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
