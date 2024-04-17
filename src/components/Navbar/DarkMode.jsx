import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
import useTheme from "../../hooks/useTheme";

const DarkMode = () => {
  const [theme, setTheme] = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="relative">
      <img
        onClick={toggleTheme}
        src={LightButton}
        alt="Light Mode"
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
      />
      <img
        onClick={toggleTheme}
        src={DarkButton}
        alt="Dark Mode"
        className={`w-12 cursor-pointer`}
      />
    </div>
  );
};

export default DarkMode;
