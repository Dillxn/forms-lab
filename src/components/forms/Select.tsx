import React from "react";
import { FieldProps } from "./Form";
import Label from "./Label";

type LabelProps = {
  options?: Array<{
    value: string;
    label?: string;
  }>;
};

export default function Select({
  label,
  name,
  required,
  defaultValue,
  options,
  children
}: FieldProps & LabelProps & { children?: React.ReactNode }) {
  return (
    <Label label={label}>
      <select name={name} required={required} defaultValue={defaultValue}>
        {children ?? options?.map(({ value, label }) => (
          <option key={value} value={value}>
            {label ?? value}
          </option>
        ))}
      </select>
    </Label>
  );
}
