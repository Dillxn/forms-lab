import { HTMLInputTypeAttribute, useContext } from "react";
import { FieldProps, FormContext } from "./Form";
import Label from "./Label";

export type InputProps = {
  pattern?: RegExp | string;
  type?: HTMLInputTypeAttribute;
  checked?: boolean;
} & FieldProps;

export default function Input({
  label,
  required,
  pattern,
  ...props
}: InputProps) {
  const formContext = useContext(FormContext);

  return (
    <Label label={label}>
      <input
        required={formContext.required || required}
        pattern={String(pattern)}
        {...props}
      />
    </Label>
  );
}
