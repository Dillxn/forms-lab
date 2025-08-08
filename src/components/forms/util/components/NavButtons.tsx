'use client';

import { use } from 'react';
import Button from '../../Button';
import { FormContext } from '../../Form';

export default function NavButtons() {
  const { pageIndex, setPageIndex, getPageCount } = use(FormContext);
  const lastPageIndex = getPageCount() - 1;

  return (
    <>
      {pageIndex > 0 && (
        <Button
          type="button"
          onClick={() => {
            setPageIndex((pageIndex) => pageIndex - 1);
          }}
        >
          Back
        </Button>
      )}
      {pageIndex < lastPageIndex && (
        <Button
          type="button"
          onClick={() => {
            setPageIndex((pageIndex) => pageIndex + 1);
          }}
        >
          Continue
        </Button>
      )}
      {pageIndex === lastPageIndex && (
        <Button type="submit">Submit</Button>
      )}
    </>
  );
}
