import { useContext } from "react";
import { FieldProps, FormContext } from "./Form";
import Input from "./Input";
import Select from "./Select";
import Label from "./Label";

export default function Address({
  label,
  name,
  required,
  defaultValue,
  value,
}: FieldProps) {
  const formContext = useContext(FormContext);

  const context = {
    required: formContext.required || required,
  };

  return (
    <>
      <FormContext value={context}>
        <Label label={label}>
          <Input name={`${name}Street`} label="Street Address" />
          <Input name={`${name}City`} label="City" />
          <Select
            name={`${name}State`}
            label="State"
            options={[
              { value: "KY", label: "Kentucky" },
              { value: "TN", label: "Tennessee" },
            ]}
          />
          <Input
            name={`${name}Zip`}
            label="Zip Code"
            pattern={/\d{5}(\-\d{4})?/}
          />
        </Label>
      </FormContext>
    </>
  );
}
