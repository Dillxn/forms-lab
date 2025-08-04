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
  enabled?: boolean | string;
  hidden?: boolean | string;
  visible?: boolean | string;
  data: Record<string, string>;
}

export const FormContext = createContext<IFormContext>({ data: {} });

export default function Form({
  children,
  action,
  ...contextProps
}: {
  children: React.ReactNode;
  action: FormAction;
} & Partial<IFormContext>) {
  const [state, formAction, isPending] = useActionState(action, null);

  const [formData, setFormData] = useState({});

  const formContext = useContext(FormContext);

  const context: IFormContext = {
    ...formContext,
    ...contextProps,
    data: formData,
  };

  const onChange = (event: ChangeEvent<HTMLFormElement>) => {
    const fieldValue =
      event.target?.type === 'checkbox'
        ? event.target.checked && event.target.value
        : event.target?.value;

    setFormData((formData) => ({
      ...formData,
      [event.target?.name]: fieldValue,
    }));
  };

  return (
    <form
      onChange={onChange}
      className="grid gap-2 p-2 transition-all duration-300"
    >
      <FormContext value={context}>{children}</FormContext>
      <button
        type="submit"
        className="mt-4 cursor-pointer rounded bg-indigo-500 p-1.5
          text-sm text-gray-50 uppercase"
      >
        Submit
      </button>
    </form>
  );
}
