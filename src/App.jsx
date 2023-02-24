import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";


function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
   <div className="w-screen h-screen bg-white dark:bg-black">
    <NavBar />
    <button className="bg-blue-300 p-4 rounded-2xl" onClick={handleThemeSwitch}>temp dark toggle </button>
    <h1 className="">hi</h1>
   </div>
  );
}

export default App
