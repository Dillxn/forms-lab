// nameToLabel() - converts camelCase to Label case
export const nameToLabel = (text: string | undefined) =>
  text
    ?.split(/(?=[A-Z])/)
    .map((word, index) =>
      index === 0
        ? word[0].toUpperCase() + word.substring(1).toLowerCase()
        : word.toLowerCase(),
    )
    .join(' ');
