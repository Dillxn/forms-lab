import { useContext } from "react";
import { FieldProps, FormContext } from "./Form";
import Label from "./Label";

export default function Input({
  label,
  name,
  required,
  defaultValue,
}: FieldProps) {
  const formContext = useContext(FormContext);

  return (
    <Label label={label}>
      <input
        name={name}
        required={formContext.required || required}
        defaultValue={defaultValue}
      />
    </Label>
  );
}
