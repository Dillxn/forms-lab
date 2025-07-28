import Input, { InputProps } from "./Input";
import Label from "./Label";

type RadioProps = {
  options?: Array<{
    value: string;
    label?: string;
  }>;
} & Omit<InputProps, "type">;

const defaultOptions = [
  { value: "true", label: "Yes" },
  { value: "false", label: "No" },
];

export default function Radio({
  options = defaultOptions,
  defaultValue,
  ...props
}: RadioProps) {
  return (
    <>
      {options?.map(({ value, label }) => (
        <Label key={value} label={label}>
          <Input type="radio" {...props} checked={value === defaultValue} />
        </Label>
      ))}
    </>
  );
}
