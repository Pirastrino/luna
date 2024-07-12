export const formatLabel = (str: string) => {
  return str
    .split('_')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

export const getOptionsFromEnum = (
  enumArray: readonly (string | number)[],
  formatLabel?: (value: string) => string,
) => {
  return enumArray.map((value) => {
    const stringValue = value.toString();

    return {
      label: formatLabel?.(stringValue) ?? stringValue,
      value: stringValue,
    };
  });
};

export const getButtonsFromEnum = <T extends string | number>(
  enumArray: readonly T[],
  onClick: (value: T) => void,
  formatLabel?: (value: string) => string,
) => {
  return enumArray.map((value) => {
    const stringValue = value.toString();

    return {
      label: formatLabel?.(stringValue) ?? stringValue,
      value,
      handleClick: () => onClick(value),
    };
  });
};

export const getOnChangeHandler =
  <T>(setAttributes: (attributes: Partial<T>) => void) =>
  <K extends keyof T>(name: K, cb?: (value?: string | number) => void) => {
    return (value?: string | number) => {
      setAttributes({ [name]: value } as Partial<T>);
      cb?.(value);
    };
  };
