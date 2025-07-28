import { useContext } from "react";
import { FormContext, FormContextProps } from "./Form";

export default function Page({
  children,
  required,
  disabled,
}: {
  children: React.ReactNode;
} & Partial<FormContextProps>) {
  const formContext = useContext(FormContext);
  const context: FormContextProps = {
    required: required ?? formContext.required,
    disabled: disabled ?? formContext.disabled,
  };
  return <FormContext value={context}>{children}</FormContext>;
}
