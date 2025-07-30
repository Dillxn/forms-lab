'use client';

import {
  ChangeEvent,
  createContext,
  useActionState,
  useContext,
  useState,
} from 'react';

type FormAction = (state: unknown, payload: FormData) => unknown;

export interface IFormContext {
  required?: boolean;
  disabled?: boolean | string;
  visible?: boolean | string;
  data?: Record<string, string>;
};

export const FormContext = createContext<IFormContext>({});

export default function Form({
  children,
  action,
  required,
  disabled,
  visible,
}: {
  children: React.ReactNode;
  action: FormAction;
} & Partial<IFormContext>) {
  const [state, formAction, isPending] = useActionState(action, null);

  const [formData, setFormData] = useState({});

  const formContext = useContext(FormContext);

  const context: IFormContext = {
    required: required ?? formContext.required,
    disabled: disabled ?? formContext.disabled,
    visible: visible ?? formContext.visible,
    data: formData,
  };

  const onChange = (event: ChangeEvent<HTMLFormElement>) => {
    setFormData((formData) => ({
      ...formData,
      [event.target?.name]: event.target?.value,
    }));
  };

  return (
    <form onChange={onChange} className="grid gap-2 p-2 transition-all duration-300">
      <FormContext value={context}>{children}</FormContext>
      <button type="submit">Submit</button>
    </form>
  );
}
