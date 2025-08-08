import React, { ChangeEvent, RefObject, use } from 'react';
import { FormContext, IContextProps } from '../../Form';
import { nameToLabel } from '../functions/nameToLabel';
import { isToggled } from '../functions/isToggled';
import { isHidden } from '../functions/isHidden';
import { isDisabled } from '../functions/isDisabled';

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
} & Partial<IContextProps>;

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
  const formContext = use(FormContext);
  const context = {
    ...formContext,
    ...contextProps,
  };

  return (
    !isHidden(context) && (
      <Element
        data-field
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
