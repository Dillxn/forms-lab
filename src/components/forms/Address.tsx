'use client';

import { useContext } from 'react';
import { FormContext, IFormContext } from './Form';
import Input from './Input';
import Select from './Select';
import Group from './Group';
import { nameToLabel } from './util/nameToLabel';
import { FieldProps } from './Field';

export default function Address({
  label,
  name,
  defaultValue,
  value,
  required,
  disabled,
  enabled,
  hidden: invisible,
  visible,
}: FieldProps & Partial<IFormContext>) {
  const formContext = useContext(FormContext);

  const context: IFormContext = {
    required: required ?? formContext.required,
    disabled: disabled ?? formContext.disabled,
    enabled: enabled ?? formContext.enabled,
    hidden: invisible ?? formContext.hidden,
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
        enabled={context.enabled}
        hidden={context.hidden}
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
