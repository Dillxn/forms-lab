import { useContext } from "react";
import { FieldProps, FormContext } from "./Form";
import Input from "./Input";
import Select from "./Select";

export default function Address({
  label,
  name,
  required,
  defaultValue,
}: FieldProps) {
  const formContext = useContext(FormContext);

  const context = {
    required: formContext.required || required
  }

  return (
    <>
      <FormContext value={context}>
        <Input label="Street Address" />
        <Input label="City" />
        <Select label="State" />
        <Input label="Zip Code" pattern="" />
      </FormContext>
    </>
  );
}
