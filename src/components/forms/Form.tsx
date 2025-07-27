import { createContext, useActionState } from "react";

type FormAction = (state: unknown, payload: FormData) => unknown;

export type FormContext = {
  required?: boolean;
};

export type FieldProps = {
  label?: string;
  name?: string;
  required?: boolean;
  defaultValue?: string;
};

export const FormContext = createContext<FormContext>({});

export default function Form({
  children,
  action,
  required,
}: {
  children: React.ReactNode;
  action: FormAction;
  required: boolean;
}) {
  const [state, formAction, isPending] = useActionState(action, null);

  const context = {
    required,
  };

  return (
    <form>
      <FormContext value={context}>{children}</FormContext>
    </form>
  );
}
