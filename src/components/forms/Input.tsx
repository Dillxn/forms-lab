import Label from "./Label";

export default function Input({ label, name, required, defaultValue }: { label: string, name: string, required: boolean, defaultValue: string }) {
  return (
    <Label label={label} name={name}>
      <input name={name} required={required} defaultValue={defaultValue} />
    </Label>
  );
}
