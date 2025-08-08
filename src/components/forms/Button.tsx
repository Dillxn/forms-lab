import { ButtonHTMLAttributes } from 'react';

export default function Button({
  type,
  children,
}: {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children?: React.ReactNode;
}) {
  return (
    <button
      type={type}
      className="cursor-pointer rounded bg-indigo-500 p-1.5
        text-sm text-gray-50 uppercase min-h-1"
    >
      {children}
    </button>
  );
}
