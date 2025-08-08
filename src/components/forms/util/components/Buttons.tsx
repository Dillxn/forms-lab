import { use } from 'react';
import Button from '../../Button';
import { FormContext } from '../../Form';

export default function Buttons({
  getPageCount,
}: {
  getPageCount: () => number;
}) {
  const { pageIndex } = use(FormContext);
  const pageCount = getPageCount();

  return (
    <>
      {pageIndex > 0 && (
        <Button type="button">Back</Button>
      )}
      {pageIndex < pageCount && (
        <Button type="button">Continue</Button>
      )}
      {pageIndex === pageCount && (
        <Button type="submit">Submit</Button>
      )}
    </>
  );
}
