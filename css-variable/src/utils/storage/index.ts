import {
  getValueFromLocalStorage,
  setValueToLocalStorage,
} from "./localStorage";

export const getTheme = (defaultTheme: boolean) => {
  return getValueFromLocalStorage("app_theme") || defaultTheme;
};

export const setTheme = (value: boolean) => {
  return setValueToLocalStorage("app_theme", value);
};
