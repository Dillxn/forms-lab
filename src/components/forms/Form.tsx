'use client';

import {
  ChangeEvent,
  createContext,
  Dispatch,
  SetStateAction,
  useActionState,
  useRef,
  useState,
} from 'react';
import NavButtons from './util/components/NavButtons';

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
  setPageIndex: Dispatch<SetStateAction<number>>;
  registerPage: (id: symbol) => number;
  getPageCount: () => number;
}

export const FormContext = createContext<IFormContext>(
  {} as IFormContext,
);

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

  const context: IFormContext = {
    ...contextProps,
    data: formData,
    pageIndex,
    setPageIndex,
    registerPage: (id: symbol) =>
      [...pageIds.current.add(id)].indexOf(id),
    getPageCount: () => [...pageIds.current].length,
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
      <FormContext value={context}>
        {children}
        <NavButtons />
      </FormContext>
    </form>
  );
}
