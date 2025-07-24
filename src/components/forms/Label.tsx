export default function Label({
  label,
  name,
  children,
}: {
  label?: string;
  name?: string;
  children?: React.ReactNode;
}) {
  const camelToLabel = (text: string | undefined) =>
    text
      ?.split(/(?=[A-Z])/)
      .map((word, index) =>
        index === 0
          ? word[0].toUpperCase() + word.substring(1).toLowerCase()
          : word.toLowerCase()
      )
      .join(" ");

  return (
    <label>
      {label ?? camelToLabel(name)}
      {children}
    </label>
  );
}
