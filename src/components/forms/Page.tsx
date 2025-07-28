import { useContext } from "react";
import { FormContext } from "./Form";

export default function Page({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  const formContext = useContext(FormContext);
  const context = {
    ...formContext,
    required: formContext.required || required,
  };
  return <FormContext value={context}>{children}</FormContext>;
}
