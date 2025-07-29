'use client';

import Input, { InputProps } from './Input';

export default function Checkbox(props: Omit<InputProps, 'type'>) {
  return <Input type="checkbox" {...props} />;
}
