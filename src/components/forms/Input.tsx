import { HTMLInputTypeAttribute, useContext } from "react";
import { FieldProps, FormContext, FormContextProps } from "./Form";
import Label from "./Label";

export type InputProps = {
  pattern?: RegExp | string;
  type?: HTMLInputTypeAttribute;
  checked?: boolean;
} & FieldProps &
  Partial<FormContextProps>;

export default function Input({
  label,
  pattern,
  required,
  disabled,
  ...props
}: InputProps) {
  const formContext = useContext(FormContext);
  const context: FormContextProps = {
    required: required ?? formContext.required,
    disabled: disabled ?? formContext.disabled,
  };

  return (
    <Label label={label}>
      <input
        required={context.required}
        disabled={context.disabled}
        pattern={String(pattern)}
        {...props}
      />
    </Label>
  );
}
