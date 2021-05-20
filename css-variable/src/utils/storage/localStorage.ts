export const setValueToLocalStorage = (key: string, value: boolean) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getValueFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else {
    return true;
  }
};
