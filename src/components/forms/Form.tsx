'use client';

import {
  ChangeEvent,
  createContext,
  useActionState,
  useContext,
  useState,
} from 'react';

type FormAction = (state: unknown, payload: FormData) => unknown;

export type FormContextProps = {
  required: boolean;
  disabled: boolean | string;
  visible: boolean | string;
  data: Record<string, string>;
};

export const FormContext = createContext<FormContextProps>({
  required: false,
  disabled: false,
  visible: true,
  data: {},
});

export default function Form({
  children,
  action,
  required,
  disabled,
  visible,
}: {
  children: React.ReactNode;
  action: FormAction;
} & Partial<FormContextProps>) {
  const [state, formAction, isPending] = useActionState(action, null);

  const [formData, setFormData] = useState({});

  const formContext = useContext(FormContext);

  const context: FormContextProps = {
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
    <form onChange={onChange}>
      <FormContext value={context}>{children}</FormContext>
      <button type="submit">Submit</button>
    </form>
  );
}
