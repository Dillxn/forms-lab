import React, { ChangeEvent, RefObject, useContext } from 'react';
import { FormContext, IFormContext } from './Form';
import { nameToLabel } from './util/nameToLabel';
import { isToggled } from './util/isToggled';
import { isHidden } from './util/isHidden';
import { isDisabled } from './util/isDisabled';

export type FieldProps = {
  children?: React.ReactNode;
  className?: string;
  name?: string;
  label?: string;
  defaultValue?: string;
  pattern?: RegExp | string;
  placeholder?: string;
  type?: string;
  defaultChecked?: boolean;
} & Partial<IFormContext>;

export default function Field({
  element: Element,
  className,
  value,
  children,
  name,
  label,
  defaultValue,
  pattern,
  placeholder,
  type,
  defaultChecked,
  ref,
  onChange,
  ...contextProps
}: {
  element: 'input' | 'select';
  value?: string;
  ref?: RefObject<null>;
  onChange?: (event: ChangeEvent) => void;
} & FieldProps) {
  const formContext = useContext(FormContext);
  const context = {
    ...formContext,
    ...contextProps,
  };

  return (
    !isHidden(context) && (
      <Element
        className={`${className ?? ''} peer rounded-md
          bg-gray-50 p-2 px-3 focus:ring-2 focus:ring-indigo-400
          focus:bg-white focus:placeholder-transparent
          focus:outline-indigo-400 disabled:cursor-not-allowed`}
        value={value}
        name={name}
        defaultValue={defaultValue}
        pattern={
          pattern instanceof RegExp
            ? pattern.toString().slice(1, -1)
            : pattern
        }
        placeholder={placeholder ?? label ?? nameToLabel(name)}
        type={type}
        defaultChecked={defaultChecked}
        required={isToggled('required', context)}
        disabled={isDisabled(context)}
        ref={ref}
        onChange={onChange}
      >
        {children}
      </Element>
    )
  );
}
