'use client';

import { use } from 'react';
import Button from '../../Button';
import { FormContext } from '../../Form';

export default function NavButtons() {
  const { pageIndex, setPageIndex, getPageCount, formRef } =
    use(FormContext);
  const lastPageIndex = getPageCount() - 1;

  const handleBack = () => {
    setPageIndex((pageIndex) => pageIndex - 1);
  };
  const handleContinue = () => {
    const pageFields =
      formRef.current?.querySelectorAll<HTMLInputElement>(
        `[data-page="${pageIndex}"] [data-field]`,
      );
    const valid = [...(pageFields ?? [])].reduce(
      (validity, field) => {
        if (!validity) return false;
        const fieldValidity = field.checkValidity();
        if (!fieldValidity) field.reportValidity();
        return fieldValidity;
      },
      true,
    );
    if (valid) setPageIndex((pageIndex) => pageIndex + 1);
  };

  return (
    <>
      {pageIndex > 0 && (
        <Button
          type="button"
          onClick={handleBack}
        >
          Back
        </Button>
      )}
      {pageIndex < lastPageIndex && (
        <Button
          type="button"
          onClick={handleContinue}
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
