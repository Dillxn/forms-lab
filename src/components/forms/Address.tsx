'use client';

import { useContext } from 'react';
import { FormContext, IFormContext } from './Form';
import Input, { FieldProps } from './Input';
import Select from './Select';
import Group from './Group';
import { nameToLabel } from './util/nameToLabel';

export default function Address({
  label,
  name,
  defaultValue,
  value,
  required,
  disabled,
  visible,
}: FieldProps & Partial<IFormContext>) {
  const formContext = useContext(FormContext);

  const context: IFormContext = {
    required: required ?? formContext.required,
    disabled: disabled ?? formContext.disabled,
    visible: visible ?? formContext.visible,
    data: formContext.data,
  };

  const labelText = label ?? nameToLabel(name);

  return (
    <>
      <Group
        label={labelText}
        required={context.required}
        disabled={context.disabled}
        visible={context.visible}
      >
        <FormContext value={context}>
          <Input name={`${name}Street`} label="Street Address" />
          <Input name={`${name}City`} label="City" />
          <Select
            name={`${name}State`}
            label="State"
            options={[
              {
                value: 'KY',
                label: 'Kentucky',
              },
              {
                value: 'TN',
                label: 'Tennessee',
              },
            ]}
          />
          <Input
            name={`${name}Zip`}
            label="Zip Code"
            pattern={/\d{5}(\-\d{4})?/}
          />
        </FormContext>
      </Group>
    </>
  );
}
