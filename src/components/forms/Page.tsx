'use client';

import { use, useRef } from 'react';
import { FormContext, IContextProps } from './Form';

export default function Page({
  children,
  ...contextProps
}: {
  children: React.ReactNode;
} & Partial<IContextProps>) {
  const formContext = use(FormContext);
  const pageId = useRef(Symbol());
  const pageNumber = useRef(formContext.registerPage(pageId.current));
  const isCurrentPage = pageNumber.current === formContext.pageIndex;
  return (
    <FormContext
      value={{
        ...formContext,
        ...contextProps,
      }}
    >
      <div
        data-page={pageNumber.current}
        className={`grid gap-[inherit]
          ${!isCurrentPage ? 'hidden' : ''}`}
      >
        {children}
      </div>
    </FormContext>
  );
}
