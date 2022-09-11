import { ThemeContext } from "./ThemeContext";
import PropTypes from 'prop-types';
import { useState } from "react";
import { DarkTheme } from '../../themes/DarkTheme';
import { LightTheme } from '../../themes/LightTheme';

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark");

    const changeTheme = () => {
        if (theme === "dark"){
            setTheme("light");
            localStorage.setItem("theme", "light")
        }else{
            setTheme("dark");
            localStorage.setItem("theme", "dark")
        }
    }
    return(
        <ThemeContext.Provider value={{changeTheme, theme: (theme === "dark" ? DarkTheme : LightTheme)}}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeContextProvider.propTypes = {
    children: PropTypes.node
}