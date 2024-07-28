import { useEffect, useState } from "react";
import { IconButton } from "../../../../components";
import MoonIcon from "../../../../assets/icons/icon-moon.svg";
import SunIcon from "../../../../assets/icons/icon-sun.svg";

const currentTheme = (localStorage.getItem("theme") || "light") as
  | "light"
  | "dark";

export const ToggleSwitch = () => {
  const [theme, setTheme] = useState<"light" | "dark">(currentTheme);

  const handleToggle = (theme: "light" | "dark") => {
    setTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {theme === "dark" ? (
        <IconButton
          aria-label="Switch to light mode"
          icon={<img src={SunIcon} alt="sun icon" />}
          onClick={() => handleToggle("light")}
        />
      ) : (
        <IconButton
          aria-label="Switch to dark mode"
          icon={<img src={MoonIcon} alt="moon icon" />}
          onClick={() => handleToggle("dark")}
        />
      )}
    </>
  );
};
