import { useContext } from "react";
import { FieldProps, FormContext, FormContextProps } from "./Form";
import Input from "./Input";
import Select from "./Select";
import Label from "./Label";

export default function Address({
  label,
  name,
  defaultValue,
  value,
  required,
  disabled,
  visible,
}: FieldProps & Partial<FormContextProps>) {
  const formContext = useContext(FormContext);

  const context: FormContextProps = {
    required: required ?? formContext.required,
    disabled: disabled ?? formContext.disabled,
    visible: visible ?? formContext.visible,
    data: formContext.data,
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
