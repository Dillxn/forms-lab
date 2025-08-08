'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { FormContext, IContextProps } from './Form';

export default function Page({
  children,
  ...contextProps
}: {
  children: React.ReactNode;
} & Partial<IContextProps>) {
  const formContext = useContext(FormContext);
  const pageId = useRef(Symbol());
  const pageNumber = useRef(formContext.registerPage(pageId.current));
  return (
    <FormContext
      value={{
        ...formContext,
        ...contextProps,
      }}
    >
      {pageNumber.current}
      {children}
    </FormContext>
  );
}
