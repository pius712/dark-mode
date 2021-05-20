import { useCallback, useLayoutEffect, useState } from "react";
import * as Dom from "utils/dom";

const toggleTheme = (mode: "dark" | "light") => {
  switch (mode) {
    case "dark": {
      Dom.addClassToBody("dark");
      Dom.removeClassToBody("light");
      break;
    }
    case "light": {
      Dom.addClassToBody("light");
      Dom.removeClassToBody("dark");
      break;
    }
  }
};
const useTheme = (): [typeof theme, typeof onToggle] => {
  const getInitialTheme = useCallback(() => {
    let theme = window.localStorage.getItem("app_theme") as
      | "light"
      | "dark"
      | null;
    const INVALID_THEME = theme !== "light" && theme !== "dark";

    if (!theme || INVALID_THEME) {
      const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
      theme = matches ? "dark" : "light";
    }

    return theme;
  }, []);

  const [theme, setTheme] = useState(getInitialTheme);

  const onToggle = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
    toggleTheme(theme);
  }, [theme]);

  useLayoutEffect(() => {
    window.localStorage.setItem("app_theme", theme);
    toggleTheme(theme);
  }, [theme]);

  return [theme, onToggle];
};

export default useTheme;
