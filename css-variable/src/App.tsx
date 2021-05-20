import React from "react";
import styles from "App.module.scss";
import "./styles/global.scss";
import "./styles/reset.scss";
import useTheme from "hooks/useTheme";
import Profile from "components/common/profile";
import ThemeSwitch from "components/common/theme-switch";
const App = () => {
  const [theme, onToggle] = useTheme();
  return (
    <>
      <div className={styles["main-container"]}>
        <ThemeSwitch checked={theme === "dark"} toggleSwitch={onToggle} />
        <div className={styles["profile-container"]}>
          <Profile />
        </div>
      </div>
    </>
  );
};

export default App;
