'use client';

import { FormContextProps } from './Form';

export default function Label({
  label,
  name,
  className,
  visible,
  children,
}: {
  label?: string;
  name?: string;
  className?: string;
  children?: React.ReactNode;
} & Partial<FormContextProps>) {
  const camelToLabel = (text: string | undefined) =>
    text
      ?.split(/(?=[A-Z])/)
      .map((word, index) =>
        index === 0
          ? word[0].toUpperCase() + word.substring(1).toLowerCase()
          : word.toLowerCase(),
      )
      .join(' ');

  return (
    <label className={className}>
      {label ?? camelToLabel(name)}
      {children}
    </label>
  );
}
