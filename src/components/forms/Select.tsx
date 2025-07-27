import { FieldProps } from "./Form";
import Label from "./Label";

type LabelProps = {
    options: Record<string, string>
}

export default function Select({ label, name, required, defaultValue }: FieldProps & LabelProps) {
    return (
        <Label label={label}>
            <select name={name} required={required} defaultValue={defaultValue}>

            </select>
        </Label>
    )
}