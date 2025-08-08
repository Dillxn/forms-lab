import { ButtonHTMLAttributes, DOMAttributes } from 'react';

export default function Button({
  type,
  onClick,
  children,
}: {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: DOMAttributes<HTMLButtonElement>['onClick'];
  children?: React.ReactNode;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="cursor-pointer rounded bg-indigo-500 p-1.5
        text-sm text-gray-50 uppercase min-h-1"
    >
      {children}
    </button>
  );
}
