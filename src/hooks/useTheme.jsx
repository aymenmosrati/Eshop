import { useEffect, useState } from "react";

// Custom hook to manage theme
const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark"); // access to html element
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
