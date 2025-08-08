'use client';

import { IContextProps } from './Form';
import Input from './Input';
import Select from './Select';
import Group from './Group';
import { nameToLabel } from './util/nameToLabel';
import { FieldProps } from './Field';

export default function Address({
  label,
  name,
  defaultValue,
  ...contextProps
}: Pick<FieldProps, 'label' | 'name' | 'defaultValue'> &
  Partial<IContextProps>) {
  const labelText = label ?? nameToLabel(name);

  return (
    <>
      <Group
        label={labelText}
        {...contextProps}
      >
        <Input
          name={`${name}Street`}
          label="Street Address"
        />
        <Input
          name={`${name}City`}
          label="City"
        />
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
          pattern={/\d{5}(-\d{4})?/}
        />
      </Group>
    </>
  );
}
