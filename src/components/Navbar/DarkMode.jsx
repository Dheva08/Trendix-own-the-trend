import React from "react";
import LightButton from "../../assets/website/light-mode-btn.png";
import DarkButton from "../../assets/website/dark-mode-btn.png";

const DarkMode = () => {

    const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light");

    React.useEffect(() => {
        const element = document.documentElement;
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);
    return (
       <div className="relative">

           <img src={LightButton} 
           alt="LightMode" 
           onClick={
            ()=> setTheme(theme=== "light"?"dark":"light")}
           className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute ${theme==="dark"?"opacity-0":"opacity-100"} z-10`}/>
           <img src={DarkButton} alt="DarkMode" 
           onClick={()=> setTheme(theme=== "light"?"dark":"light")}
           className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 right-0 z-20 "/>
        </div>
    );
};

export default DarkMode;