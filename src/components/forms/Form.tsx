import { createContext, useActionState, useContext } from "react";

type FormAction = (state: unknown, payload: FormData) => unknown;

export type FormContextProps = {
  required: boolean;
  disabled: boolean;
};

export type FieldProps = {
  label?: string;
  name?: string;
  required?: boolean;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
};

export const FormContext = createContext<FormContextProps>({
  required: false,
  disabled: false,
});

export default function Form({
  children,
  action,
  required,
  disabled,
}: {
  children: React.ReactNode;
  action: FormAction;
} & Partial<FormContextProps>) {
  const [state, formAction, isPending] = useActionState(action, null);

  const formContext = useContext(FormContext);

  const context: FormContextProps = {
    required: required ?? formContext.required,
    disabled: disabled ?? formContext.disabled,
  };

  return (
    <form>
      <FormContext value={context}>{children}</FormContext>
    </form>
  );
}
