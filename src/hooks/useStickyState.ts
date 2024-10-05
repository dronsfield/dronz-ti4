import React from "react";

export function useStickyState<T>(
  defaultValue: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = React.useState(defaultValue);
  const [initialised, setInitialised] = React.useState(false);
  React.useEffect(() => {
    const storageValue = window.localStorage.getItem(key);
    if (storageValue !== null) {
      try {
        setValue(JSON.parse(storageValue) as T);
      } catch (err) {
        console.error(`invalid storage value for ${key}`);
      }
    }
    setInitialised(true);
  }, []);
  React.useEffect(() => {
    if (value !== null && initialised) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, initialised]);
  return [value, setValue];
}
