'use client';

import {
  ChangeEvent,
  createContext,
  useActionState,
  use,
  useRef,
  useState,
} from 'react';
import Buttons from './util/components/Buttons';

type FormAction = (state: unknown, payload: FormData) => unknown;

export interface IContextProps {
  required?: boolean;
  disabled?: boolean | string;
  enabled?: boolean | string;
  hidden?: boolean | string;
  visible?: boolean | string;
}

export interface IFormContext extends IContextProps {
  data: Record<string, string>;
  pageIndex: number;
  setPageIndex: (index: number) => void;
  registerPage: (id: symbol) => number;
}

export const FormContext = createContext<IFormContext>({
  data: {},
  pageIndex: 0,
  setPageIndex: (index: number) => null,
  registerPage: (id: symbol) => 0,
});

export default function Form({
  children,
  action,
  ...contextProps
}: {
  children: React.ReactNode;
  action: FormAction;
} & Partial<IContextProps>) {
  const [state, formAction, isPending] = useActionState(action, null);
  const [formData, setFormData] = useState({});
  const [pageIndex, setPageIndex] = useState(0);
  const pageIds = useRef(new Set<symbol>());
  const formContext = use(FormContext);

  const context: IFormContext = {
    ...formContext,
    ...contextProps,
    data: formData,
    pageIndex,
    setPageIndex,
    registerPage: (id: symbol) =>
      [...pageIds.current.add(id)].indexOf(id),
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
      <Buttons getPageCount={() => [...pageIds.current].length} />
    </form>
  );
}
